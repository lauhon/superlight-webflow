import config from "../config";
import logger from "../logger";
import fetch from "../types/fetch";
import { MailjetContact, MailjetError } from "../types/mailjet";

export const addContact = async (
  email: string
): Promise<AddContactResponse> => {
  const response = await fetchFromMailjet(contactEndpoint, {
    email,
  });

  if (!response.ok) {
    return evaluateMailjetError((await response.json()) as MailjetError);
  }

  const result = await response.json();

  const [newContact] = result.Data as MailjetContact[];

  logger.debug({ newContact }, "Successfully created Mailject contact");

  const listResponse = await addUserToList(newContact);

  if (!listResponse.ok) {
    return evaluateMailjetError((await listResponse.json()) as MailjetError);
  }

  logger.debug(
    { list: await listResponse.json() },
    "Added Mailjet contact to list"
  );

  return {
    status: 200,
    message: email,
  };
};

const addUserToList = async (contact: MailjetContact) => {
  const response = await fetchFromMailjet(contactListEndpoint, {
    IsUnsubscribed: "true",
    ContactID: contact.ID,
    ContactAlt: contact.Email,
    ListID: config.mailJetContactList,
  });

  return response;
};

const evaluateMailjetError = (error: MailjetError): AddContactResponse => {
  if (error.ErrorMessage.includes("MJ18 A Contact resource with value ")) {
    return {
      status: 409,
      message: "You are already in the waitlist!",
    };
  }

  return {
    status: 500,
    message: "Unknown Mailjet Error occured",
  };
};

const createAuthBasic = () => {
  return (
    "Basic " +
    Buffer.from(config.mailJetUser + ":" + config.mailJetPassword).toString(
      "base64"
    )
  );
};

const mailApi = "https://api.mailjet.com/v3/REST";
const contactEndpoint = "/contact ";
const contactListEndpoint = "/listrecipient ";

export type AddContactResponse = {
  status: AddContactStatus;
  message: string;
};

export type AddContactStatus = 200 | 400 | 409 | 500;

const fetchFromMailjet = (endpoint: string, body: Object) => {
  return fetch(mailApi + endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${createAuthBasic()}`,
    },
    body: JSON.stringify(body),
  });
};

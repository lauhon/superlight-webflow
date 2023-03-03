import config from "../config";
import logger from "../logger";
import fetch from "../types/fetch";
import { MailjetContact, MailjetError } from "../types/mailjet";

export const addContact = async (
  email: string
): Promise<AddContactResponse> => {
  const response = await fetchFromMailjetContactApi(contactEndpoint, {
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

  /*
  // No need to send welcome mail, automatically sends it when adding user to list
  const sendMessageResponse = await sendWelcomeEmail(newContact);

  if (!sendMessageResponse.ok) {
    return evaluateMailjetError(
      (await sendMessageResponse.json()) as MailjetError
    );
  }

  logger.debug(
    { list: await sendMessageResponse.json() },
    "Sent Message to user"
  );*/

  return {
    status: 200,
    message: newContact,
  };
};

const addUserToList = async (contact: MailjetContact) => {
  const response = await fetchFromMailjetContactApi(contactListEndpoint, {
    ContactID: contact.ID,
    ContactAlt: contact.Email,
    ListID: config.mailJetContactList,
  });

  return response;
};

//Currently not used - commented out
/*const sendWelcomeEmail = async (contact: MailjetContact) => {
  const response = await fetchFromMailjetSendApi({
    Messages: [
      {
        From: {
          Name: "Superlight",
          Email: "info@superlight.me",
        },
        To: [
          {
            Email: contact.Email,
            Name: contact.Name,
          },
        ],
        TemplateID: config.mailJetWelcomeTemlate,
        TemplateLanguage: true,
        Subject: "Willkommen bei Superlight",
        Variables: {},
      },
    ],
  });

  return response;
};*/

const evaluateMailjetError = (error: MailjetError): AddContactResponse => {
  logger.warn({ error }, "Error from Mailjet");

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

const contactApi = "https://api.mailjet.com/v3/REST";
const contactEndpoint = "/contact ";
const contactListEndpoint = "/listrecipient ";
//const sendApi = "https://api.mailjet.com/v3.1/send";

export type AddContactResponse = {
  status: AddContactStatus;
  message: any;
};

export type AddContactStatus = 200 | 400 | 409 | 500;

const fetchFromMailjetContactApi = (endpoint: string, body: Object) => {
  return fetch(contactApi + endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${createAuthBasic()}`,
    },
    body: JSON.stringify(body),
  });
};

//Currently not used
/*
const fetchFromMailjetSendApi = (body: MailjetSendRequest) => {
  return fetch(sendApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${createAuthBasic()}`,
    },
    body: JSON.stringify(body),
  });
};
*/

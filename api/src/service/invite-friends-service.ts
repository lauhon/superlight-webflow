import config from "../config";
import logger from "../logger";
import fetch from "../types/fetch";
import { MailjetContact, MailjetError } from "../types/mailjet";
import { addContact } from "./register-service";

export const acceptInvitation = async (
  email: string,
  invitedFrom: string
): Promise<GetContactResponse> => {
  const response = await updateMailjetContactApi(contactdataEndpoint, email, {
    data: [
      {
        Name: "invitedfrom",
        Value: invitedFrom,
      },
    ],
  });

  if (!response.ok) {
    return evaluateMailjetError((await response.json()) as MailjetError);
  }

  //const result = await response.json();

  return {
    status: 200,
    message: "Invitation accepted.",
  };
};

export const getInvitationLink = async (
  email: string
): Promise<GetContactResponse> => {
  var referralLink = "";

  const response = await getContactFromMailjetContactApi(
    contactEndpoint,
    email
  );

  if (!response.ok) {
    const mailJetError = evaluateMailjetError(await response.json());

    //Email not a mailjet contact, so create it
    if (mailJetError.status == 404) {
      const newContactResponse = await addContact(email, null);
      const contact = newContactResponse.message as MailjetContact;
      referralLink =
        "http://localhost:3000/earlyaccess.html?invitation=" + contact.ID;
    } else {
      return mailJetError;
    }
  } else {
    const result = await response.json();
    const [contact] = result.Data as MailjetContact[];
    referralLink =
      "http://localhost:3000/earlyaccess.html?invitation=" + contact.ID;
  }

  return {
    status: 200,
    message: referralLink,
  };
};

const evaluateMailjetError = (error: MailjetError): GetContactResponse => {
  logger.warn({ error }, "Error from Mailjet");

  if (error.ErrorMessage.includes("MJ18 A Contact resource with value ")) {
    return {
      status: 409,
      message: "You are already in the waitlist!",
    };
  }
  if (error.StatusCode == 400) {
    return {
      status: 400,
      message: "Invalid email address.",
    };
  }
  if (error.StatusCode == 404) {
    return {
      status: 404,
      message: "Email not a user yet.",
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
const contactEndpoint = "/contact/ ";
const contactdataEndpoint = "/contactdata/";

export type GetContactResponse = {
  status: GetContactStatus;
  message: string;
};

export type GetContactStatus = 200 | 400 | 404 | 409 | 500;

const getContactFromMailjetContactApi = (endpoint: string, email: string) => {
  return fetch(contactApi + endpoint + email, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${createAuthBasic()}`,
    },
  });
};

const updateMailjetContactApi = (
  endpoint: string,
  email: string,
  body: Object
) => {
  console.log(JSON.stringify(body));
  return fetch(contactApi + endpoint + email, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${createAuthBasic()}`,
    },
    body: JSON.stringify(body),
  });
};

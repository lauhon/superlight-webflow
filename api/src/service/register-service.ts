import config from "../config";
import fetch from "../types/fetch";
import { MailjetError } from "../types/mailjet";

export const addContact = async (
  email: string
): Promise<AddContactResponse> => {
  const response = await fetch(mailApi + contactEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${createAuthBasic()}`,
    },
    body: JSON.stringify({
      email,
    }),
  });

  if (!response.ok) {
    return evaluateMailjetError((await response.json()) as MailjetError);
  }

  return {
    status: 200,
    message: email,
  };
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

export type AddContactResponse = {
  status: AddContactStatus;
  message: string;
};

export type AddContactStatus = 200 | 400 | 409 | 500;

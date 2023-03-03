import config from "../config";
import logger from "../logger";
import fetch from "../types/fetch";
import { MailjetContact, MailjetError } from "../types/mailjet";

export const getInvitationLink = async (
  email: string
): Promise<GetContactResponse> => {
  const response = await getContactFromMailjetContactApi(
    contactEndpoint,
    email
  );

  if (!response.ok) {
    return evaluateMailjetError((await response.json()) as MailjetError);
  }

  const result = await response.json();

  const [contact] = result.Data as MailjetContact[];

  logger.debug({ contact }, "Successfully fetched Mailject contact");

  const referralLink = "https://superlight.me/invite-a-friend/" + contact.ID;

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

export type GetContactResponse = {
  status: GetContactStatus;
  message: string;
};

export type GetContactStatus = 200 | 400 | 409 | 500;

const getContactFromMailjetContactApi = (endpoint: string, email: string) => {
  return fetch(contactApi + endpoint + email, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${createAuthBasic()}`,
    },
  });
};

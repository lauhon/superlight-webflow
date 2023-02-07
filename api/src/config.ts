import dotenv from "dotenv";

dotenv.config();

const config = {
  validHost: process.env.VALID_HOST || "http://localhost:3000",
  mailJetContactList: process.env.MAILJET_CONTACT_LIST || "",
  mailJetUser: process.env.MAILJET_USER || "",
  mailJetPassword: process.env.MAILJET_PASSWORD || "",
  mailJetWelcomeTemlate: Number.parseInt(
    process.env.MAILJET_WELCOME_TEMPLATE || "0"
  ),
  port: Number(process.env.PORT || "8080"),
  host: process.env.HOST || "0.0.0.0",
  logLevel: process.env.LOG_LEVEL || "info",
};

export default config;

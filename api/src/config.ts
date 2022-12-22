import dotenv from "dotenv";

dotenv.config();

const config = {
  validHost: process.env.VALID_HOST || "localhost:3000",
  mailJetContactList: process.env.MAILJET_CONTACT_LIST || "",
  mailJetUser: process.env.MAILJET_USER || "",
  mailJetPassword: process.env.MAILJET_PASSWORD || "",
  port: Number(process.env.PORT || "8080"),
  host: process.env.HOST || "0.0.0.0",
};

export default config;

const config = {
  validHost: process.env.VALID_HOST || "localhost:3000",
  mailJetUser: process.env.MAILJET_USER || "",
  mailJetPassword: process.env.MAILJET_PASSWORD || "",
};

export default config;

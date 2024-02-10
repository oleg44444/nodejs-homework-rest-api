const nodemailer = require("nodemailer");
require("dotenv").config();

const { GOOGLE_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.gmail.com",
  port: "587",
  secure: false,
  auth: {
    user: "tesla.fitches@gmail.com",
    pass: GOOGLE_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "tesla.fitches@gmail.com" };

  await transport
    .sendMail(email)
    .then(() => console.log("email send success"))
    .catch((error) => console.log(error.message));
  return true;
};

module.exports = sendEmail;

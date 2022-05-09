import { MailAdapter, SendMailData } from "../mail-adapters";
import nodemailer from "nodemailer";

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "58233b71802c3f",
    pass: "226b9b5666b86e",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail(data: SendMailData) {
    const { email, type, comment, screenshot } = data;

    await transport.sendMail({
      from: email || "support@widget.com",
      to: "Djonata S. Dias, diasdjonata@gmail.com", // list of receivers
      subject: `Support Widget Message`, // Subject line
      html: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
        "<p>Hello Support Widget,</p><br>",
        `<p>Message type: <strong>${comment}</strong></p>`,
        `<p>Comment: ${comment}</p>`,
        screenshot
          ? `<img width="100%" height="100%" src="${screenshot}" />`
          : "",
        `</div>`,
      ].join("\n"),
    });
  }
}

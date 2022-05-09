import { EmailValidate } from "../../utils";
import express from "express";

export default function ValidateSubmitMiddleware(
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) {
  const { type, comment, screenshot, email } = request.body;
  let errorMessage = "";

  if (!type) {
    errorMessage = "Type is required";
  }

  if (!comment) {
    errorMessage = "Comment is required";
  }

  if (screenshot && !screenshot.startsWith("data:image/png;base64,")) {
    errorMessage = "Screenshot is not supported";
  }

  if (email && !EmailValidate(email)) {
    errorMessage = "Email is not valid";
  }

  if (errorMessage) {
    return response.status(400).json({ message: errorMessage });
  }
  return next();
}

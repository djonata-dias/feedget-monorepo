import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import express from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import ValidateFeedbackMiddleware from "./middlewares/validate-feedback-middleware";

const router = express.Router();

router.get("/", (_req, res) => {
  res.status(200).json({ message: "Server is working!" });
});

router.post(
  "/feedbacks",
  ValidateFeedbackMiddleware,
  async (request, response) => {
    console.log("Received feedback:", request.body);
    const { type, comment, screenshot, name, email } = request.body;
    try {
      const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
      const nodemailerMailAdapter = new NodemailerMailAdapter();
      const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodemailerMailAdapter
      );

      await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
        name,
        email,
      });
      response.status(201).send("Feedback submitted");
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: "Error submitting feedback" });
    }
  }
);

export default router;

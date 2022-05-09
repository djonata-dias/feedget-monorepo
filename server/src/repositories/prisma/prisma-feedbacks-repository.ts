import { prisma } from "../../prisma";
import {
  FeedbacksRepository,
  IFeedbackCreateData,
} from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create(data: IFeedbackCreateData) {
    const { type, comment, screenshot } = data;
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}

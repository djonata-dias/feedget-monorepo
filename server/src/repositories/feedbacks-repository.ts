export interface IFeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepository {
  create: (data: IFeedbackCreateData) => Promise<void>;
}

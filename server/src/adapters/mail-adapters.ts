export interface SendMailData {
  type: string;
  comment: string;
  screenshot?: string;
  email: string;
  name?: string;
}

export interface MailAdapter {
  sendMail: (data: SendMailData) => Promise<void>;
}

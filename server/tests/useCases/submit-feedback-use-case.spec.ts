import { SubmitFeedbackUseCase } from "../../src/use-cases/submit-feedback-use-case";

describe("Should able to submit a feedback", () => {
  const create = jest.fn();
  const sendMail = jest.fn();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    { create },
    { sendMail }
  );
  it("Submit feedback", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "test",
        screenshot: "data:image/png;base64, 18A87FASDF",
        name: "test",
        email: "test@gmail.com",
      })
    ).resolves.not.toThrow();

    expect(create).toHaveBeenCalled();
    expect(sendMail).toHaveBeenCalled();
  });

  it("Should throw error without 'type'", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "",
        comment: "test",
        screenshot: "data:image/png;base64, 16as84s",
        name: "",
        email: "test@gmail.com",
      })
    ).rejects.toThrow();
  });

  it("Should throw error without 'comment'", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "",
        screenshot: "",
        name: "",
        email: "test@gmail.com",
      })
    ).rejects.toThrow();
  });

  it("Should throw error when 'email' is not valid", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "test",
        screenshot: "",
        name: "",
        email: "@gmail.com",
      })
    ).rejects.toThrow();

    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "test",
        screenshot: "",
        name: "",
        email: "",
      })
    ).rejects.toThrow();
  });

  it("Should throw error when 'screenshot' is not valid", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "test",
        screenshot: "test.png",
        name: "",
        email: "test@gmail.com",
      })
    ).rejects.toThrow();
  });
});

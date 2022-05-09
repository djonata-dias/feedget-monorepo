import EmailValidate from "../../utils/EmailValidate";

describe("EmailValidate", () => {
  it("should return true for valid email", () => {
    expect(EmailValidate("test.mail@gmail.com")).toBe(true);
    expect(EmailValidate("test.mail@gmail.com.br")).toBe(true);
  });
  it("should return false for invalid email", async () => {
    expect(EmailValidate("test.mail@gmail")).toBe(false);
    expect(EmailValidate("test.mail@gmailcom ")).toBe(false);
    expect(EmailValidate("test.mailgmail.com")).toBe(false);
    expect(EmailValidate("@gmail.com")).toBe(false);
    expect(EmailValidate("")).toBe(false);
  });
});

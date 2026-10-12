export type Enquiry = {
  name: string;
  email: string;
  service: string;
  message: string;
};
export interface ContactAdapter {
  prepare(enquiry: Enquiry): Promise<{ demo: true; message: string }>;
}
export const demoContactAdapter: ContactAdapter = {
  async prepare(enquiry) {
    if (
      enquiry.name.trim().length < 2 ||
      !/^\S+@\S+\.\S+$/.test(enquiry.email) ||
      !enquiry.service ||
      enquiry.message.trim().length < 15
    )
      throw new Error(
        "Please complete the form with a valid email and a little more project detail.",
      );
    return {
      demo: true,
      message:
        "Your enquiry is ready. This form is a demo; no message was sent. Email gridandlogic@gmail.com to reach the studio.",
    };
  },
};

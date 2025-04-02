import { z } from "zod";

export const ContactUsFormSchema = z.object({
  name: z
    .string({ required_error: "This field is required!" })
    .min(1, { message: "This field is required!" }),
  email: z
    .string({ required_error: "This field is required!" })
    .min(1, { message: "This field is required!" })
    .email(),
  phone: z
    .string({ required_error: "This field is required!" })
    .min(1, { message: "This field is required!" }),
  tg: z.string(),
  agree: z.coerce.boolean({
    required_error: "This field is required!",
    coerce: true,
  }),
});

export type ContactUsFormValues = z.infer<typeof ContactUsFormSchema>;

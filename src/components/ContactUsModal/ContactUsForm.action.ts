"use server";

import type { ContactUsFormValues } from "./ContactUsForm.schema";

type Data = Omit<ContactUsFormValues, "agree">;

export async function sendApplicationForm(data: Data) {
  console.log("data", data);
}

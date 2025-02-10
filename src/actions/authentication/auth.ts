"use server";

import { RegisterFormSchema } from "@/lib/rules";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function register(prevState: any, formData: FormData) {
  const validatedFields = RegisterFormSchema.safeParse({
    company_name: formData.get("company_name"),
    email: formData.get("email"),
    phone_number: formData.get("phone_number"),
    registration_number: formData.get("registration_number"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Return the validated data

}

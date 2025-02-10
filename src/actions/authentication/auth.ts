"use server";

import { RegisterFormSchema } from "@/lib/rules";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function register(prevState: any, formData: FormData) {

  console.log(1);
  console.log(prevState);

  const validatedFields = RegisterFormSchema.safeParse({
    company_name: formData.get("company_name"),
    email: formData.get("email"),
    phone_number: formData.get("phone_number"),
    registration_number: formData.get("registration_number"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  });

  console.log(2);
  console.log(validatedFields);

  if (!validatedFields.success) {
    return {
      ...prevState,
      company_name: formData.get("company_name"),
      email: formData.get("email"),
      phone_number: formData.get("phone_number"),
      registration_number: formData.get("registration_number"),
      password: formData.get("password"),
      confirm_password: formData.get("confirm_password"),
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Extract form fields
  console.log(3);
  const { email, phone_number, password, confirm_password, company_name, registration_number } = validatedFields.data;
  console.log(email, phone_number, company_name, password, confirm_password, registration_number);
  
  // return validatedFields.data

}

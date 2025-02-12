"use server";

import { FacilityRegisterFormSchema } from "@/lib/rules";
import { redirect } from "next/navigation";
import { FacilityInterface, SupplierInterface } from "./auth.types";

export async function registerFacility(
  prevState: FacilityInterface,
  formData: FormData
) {
  const validatedFields = FacilityRegisterFormSchema.safeParse({
    company_name: formData.get("company_name"),
    email: formData.get("email"),
    phone_number: formData.get("phone_number"),
    registration_number: formData.get("registration_number"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  });

  if (!validatedFields.success) {
    return {
      company_name: formData.get("company_name") as string,
      email: formData.get("email") as string,
      phone_number: formData.get("phone_number") as string,
      registration_number: formData.get("registration_number") as string,
      password: formData.get("password") as string,
      confirm_password: formData.get("confirm_password") as string,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Extract form fields
  // const { email, phone_number, password, confirm_password, company_name, registration_number } = validatedFields.data;
  // console.log(email, phone_number, company_name, password, confirm_password, registration_number);

  redirect("/");
}

export async function registerSupplier(
  prevState: SupplierInterface,
  formData: FormData
) {
  const validatedFields = FacilityRegisterFormSchema.safeParse({
    business_name: formData.get("business_name"),
    email: formData.get("email"),
    phone_number: formData.get("phone_number"),
    address: formData.get("address"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  });

  if (!validatedFields.success) {
    return {
      business_name: formData.get("business_name") as string,
      email: formData.get("email") as string,
      phone_number: formData.get("phone_number") as string,
      address: formData.get("address") as string,
      password: formData.get("password") as string,
      confirm_password: formData.get("confirm_password") as string,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Extract form fields
  // const { email, phone_number, password, confirm_password, company_name, registration_number } = validatedFields.data;
  // console.log(email, phone_number, company_name, password, confirm_password, registration_number);

  redirect("/");
}

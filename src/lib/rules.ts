import { z } from "zod";

export const RegisterFormSchema = z
  .object({
    company_name: z
      .string()
      .min(1, { message: "Be at least 1 character long" })
      .trim(),
    email: z
      .string()
      .email({
        message: "Please enter a valid email",
      })
      .trim(),
    phone: z.string().regex(/^0\d{10}$/, {
      message: "Phone number must be 11 digits and start with 0",
    }),
    password: z
      .string()
      .min(1, { message: "Password field cannot be empty" })
      .min(5, { message: "Be at least 5 characters long" })
      .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
      .regex(/[0-9]/, { message: "Contain at least one number." })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Contain at least one special character.",
      })
      .trim(),
    confirmPassword: z.string().trim(),
  })
  .superRefine((value, context) => {     
    // value contains all the fields from your schema (email, password, confirmPassword e.t.c )
    // context object let's you add custom validation
    if(value.password !== value.confirmPassword){
      context.addIssue({
        code: z.ZodIssueCode.custom,   // Indicates a custom validation error
        message: "Passwords do not match",   // Error message
        path: ["confirmPassword"]    // Specifies which field caused the error
      })
    }
  });

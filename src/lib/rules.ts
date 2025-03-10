import { z } from "zod";

export const FacilityRegisterFormSchema = z
  .object({
    company_name: z
      .string()
      .min(1, { message: "Be at least 1 character long" })
      .trim(),
    registration_number: z
      .string()
      .min(1, { message: "Be at least 1 character long" })
      .trim(),
    email: z
      .string()
      .email({
        message: "Please enter a valid email",
      })
      .trim(),
    phone_number: z.string().regex(/^0\d{10}$/, {
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
    confirm_password: z.string().trim(),
  })
  .superRefine((value, context) => {
    if (value.password !== value.confirm_password) {
      context.addIssue({
        code: z.ZodIssueCode.custom, // Indicates a custom validation error
        message: "Passwords do not match", // Error message
        path: ["confirm_password"], // Specifies which field caused the error
      });
    }
  });

  export const SupplierRegisterFormSchema = z
  .object({
    business_name: z
      .string()
      .min(1, { message: "Be at least 1 character long" })
      .trim(),
    address: z
      .string()
      .min(1, { message: "Be at least 1 character long" })
      .trim(),
    email: z
      .string()
      .email({
        message: "Please enter a valid email",
      })
      .trim(),
    phone_number: z.string().regex(/^0\d{10}$/, {
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
    confirm_password: z.string().trim(),
  })
  .superRefine((value, context) => {
    if (value.password !== value.confirm_password) {
      context.addIssue({
        code: z.ZodIssueCode.custom, // Indicates a custom validation error
        message: "Passwords do not match", // Error message
        path: ["confirm_password"], // Specifies which field caused the error
      });
    }
  });

  export const LoginFormSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email." }).trim(),
    password: z.string().min(1, { message: "Password is required." }).trim(),
  });
  

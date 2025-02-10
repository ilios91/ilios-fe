export interface InitialStateInterface {
  company_name: string;
  email: string;
  phone_number: string;
  registration_number: string;
  password: string;
  confirm_password: string;
  errors?: {
    company_name?: string[] | undefined;
    email?: string[] | undefined;
    phone_number?: string[] | undefined;
    registration_number?: string[] | undefined;
    password?: string[] | undefined | undefined
    confirm_password?: string[] | undefined;
  };
}

// const initialState = {
//   company_name: "",
//   email: "",
//   phone_number: "",
//   registration_number: "",
//   password: "",
//   confirm_password: "",
// };


export interface SchemaErrorInterface {
  errors?: {
    email?: string[] | undefined;
    company_name?: string[] | undefined;
    phone?: string[] | undefined;
    password?: string[] | undefined;
    confirm_password?: string[] | undefined;
  };
}

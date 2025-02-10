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



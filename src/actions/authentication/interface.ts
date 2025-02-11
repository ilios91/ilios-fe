export interface InitialState {
  company_name: string;
  business_name: string,
  email: string;
  phone_number: string;
  registration_number: string;
  password: string;
  confirm_password: string;
  errors?: {
    company_name?: string[];
    email?: string[];
    phone_number?: string[];
    registration_number?: string[];
    password?: string[];
    confirm_password?: string[];
  };
}

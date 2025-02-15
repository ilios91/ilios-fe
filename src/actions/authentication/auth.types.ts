interface BaseState{
  email: string;
  phone_number: string;
  password: string;
  confirm_password: string;
  errors?: {
    [key: string]: string[];
  }
  // errors?: {
  //   company_name?: string[];
  //   email?: string[];
  //   phone_number?: string[];
  //   registration_number?: string[];
  //   password?: string[];
  //   confirm_password?: string[];
  // };
}

export interface FacilityInterface extends BaseState{
  company_name: string;
  registration_number: string;
}

export interface SupplierInterface extends BaseState{
  business_name: string;
  address: string
}

export type LoginInterface = Pick<BaseState, "email" | "password" | "errors">;





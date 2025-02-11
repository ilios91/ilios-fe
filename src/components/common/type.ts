export interface FormGroupProps {
  label: string;
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  defaultValue?: string;
  errors?: string[] | undefined;
}


export interface InputProps {
  type: string,
  placeholder?: string,
  name: string,
  id: string,
  defaultValue?: string,
}
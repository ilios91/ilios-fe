import Input from "./Input";

export interface FormGroupProps {
  label: string;
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  defaultValue?: string;
  errors?: {
    company_name?: string[] | undefined;
    email?: string[] | undefined;
    phone_number?: string[] | undefined;
    registration_number?: string[] | undefined;
    password?: string[] | undefined | undefined
    confirm_password?: string[] | undefined;
  };
}

export default function FormGroup({
  label,
  type,
  placeholder,
  defaultValue,
  name,
  id,
  errors
}: FormGroupProps) {
  return (
    <div className="flex flex-col w-full gap-y-2">
      <label
        className="text-[#171717] text-sm font-medium leading-[21.94px]"
        htmlFor={id}
      >
        {label}
      </label>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      {errors && errors[name] && (
        <p className="error">{errors[name]}</p>
      )}
      {errors && <p className="error">{}</p>}
    </div>
  );
}

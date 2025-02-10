import Input from "./Input";

export interface FormGroupProps {
  label: string;
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  defaultValue?: string;
  errors?: {
    [key: string]: string[] | undefined;
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
      {errors?.[name]?.[0] && (
        <p className="text-red-500 text-sm mt-1">{errors[name]![0]}</p>
      )}
    </div>
  );
}

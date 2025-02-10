import Input from "./Input";

export interface FormGroupProps {
  value: string;
  label: string;
  type: string;
  name: string;
  id: string;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChange: () => void;
  placeholder?: string;
  defaultValue?: string;
  error?: string
}

export default function FormGroup({
  label,
  type,
  value,
  placeholder,
  defaultValue,
  onChange,
  name,
  id,
  error
}: FormGroupProps) {
  return (
    <div className="flex flex-col w-full gap-y-2">
      <label
        className="text-[#171717] text-sm font-medium leading-[21.94px]"
        htmlFor={name}
      >
        {label}
      </label>
      <Input
        id={id}
        name={name}
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
}

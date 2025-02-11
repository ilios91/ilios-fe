import { FormGroupProps } from "../type";
import Input from "./Input";

export default function FormGroup({
  label,
  type,
  placeholder,
  defaultValue,
  name,
  id,
  errors,
}: FormGroupProps) {
  return (
    <div className="flex flex-col w-full gap-y-1 text-xs">
      <label
        className="text-[#171717] text-xs font-medium leading-[21.94px]"
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

      {/* Show errors for only password and confirm password */}
      {errors && name === "password" && (
        <div className="error">
          <p>Password must:</p>
          <ul className="list-disc list-inside ml-4">
            {errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        </div>
      )}
      {errors && name === "confirm_password" && (
        <div className="error">
          <ul className="list-disc list-inside ml-4">
            {errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

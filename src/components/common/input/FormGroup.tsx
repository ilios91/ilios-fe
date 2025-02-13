import { FormGroupProps } from "../type";
import Input from "./Input";
import UploadIcon from '../../icons/UploadIcon';

export default function FormGroup({
  label,
  type,
  placeholder,
  defaultValue,
  name,
  id,
  errors,
}: FormGroupProps) {
  // Text Inputs
  if (type === "text" || type === "password" || type === "email") {
    return (
      <div className="flex flex-col w-full gap-y-1 text-xs">
        <label
          className="text-[#171717] text-xs font-medium leading-[21.94px]"
          htmlFor={id}
        >
          {" "}
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

  // File Inputs
  return (
    <div className="flex flex-col w-full gap-y-1 text-xs">
      <p>{label}</p>
      <label
        className="text-[10px] h-10 w-[518px] p-2 rounded-lg border-none outline-none text-[#BABABA] font-medium leading-[17px] bg-white items-center justify-between cursor-pointer"
        htmlFor={id}
      >
        <div className="flex w-full">
          <input accept="image/*" name={name} id={id} className="bg-red-500 w-full cursor-default hidden" type="file" />
          <div className="flex- bg-blue-600 ml-auto">
            <UploadIcon size="sm" />
          </div>
        </div>
      </label>
    </div>
  );
}

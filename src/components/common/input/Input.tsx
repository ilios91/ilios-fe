import { InputProps } from "../type";

export default function Input({
  type,
  placeholder,
  defaultValue,
  name,
  id,
}: InputProps) {
  return (
    <input
      name={name}
      id={id}
      type={type}
      className="text-[10px] h-10 w-[518px] p-2 rounded-lg border-none outline-none text-[#BABABA] font-medium leading-[17px] bg-white"
      placeholder={placeholder}
      defaultValue={defaultValue}
      required
    />
  );
}

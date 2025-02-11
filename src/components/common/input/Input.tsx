interface InputProps {
  type: string,
  placeholder?: string,
  name: string,
  id: string,
  defaultValue?: string,
}

export default function Input({ type, placeholder, defaultValue, name, id }: InputProps ) {
  return (
    <input
      name={name}
      id={id}
      type={type}
      className="text-[10px] h-10 w-[518px] p-2 rounded-lg border-none outline-none text-[#BABABA] font-medium leading-[17px] bg-white"
      placeholder={placeholder}
      defaultValue={defaultValue}
      // required
    />
  );
}
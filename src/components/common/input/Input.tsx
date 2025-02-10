interface InputProps {
  type: string,
  placeholder?: string,
  value: string,
  name: string,
  id: string,
  defaultValue?: string,
  onChange: ()  => void 
}

export default function Input({ type, placeholder, value, defaultValue, onChange, name, id }: InputProps ) {
  return (
    <input
      name={name}
      id={id}
      onChange={onChange}
      value={value} 
      type={type}
      className="h-11 w-[518px] p-2.5 rounded-lg border-none outline-none text-[#BABABA] text-sm leading-[17px] bg-white"
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  );
}
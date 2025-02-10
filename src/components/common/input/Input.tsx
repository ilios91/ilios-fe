interface InputProps {
  type: string,
  placeholder?: string,
  value: string,
  defaultValue?: string,
  onChange: ()  => void 
}

export default function Input({ type, placeholder, value, defaultValue, onChange }: InputProps ) {
  return (
    <input
    onChange={onChange}
      value={value} 
      type={type}
      className="h-12 w-[518px] p-2.5 rounded-lg border-none outline-none text-[#BABABA] text-sm leading-[17px] bg-white"
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  );
}
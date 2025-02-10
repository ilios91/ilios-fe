interface InputProps {
  type: string,
  className: string,
  placeholder?: string,
  value?: string,
  defaultValue?: string
}
export default function Input({ type, className, placeholder, value }: InputProps) {
  return (
    <input
      value={value} 
      type={type}
      className={className}
      placeholder={placeholder}
    />
  );
}
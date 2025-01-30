interface InputProps {
  type: string,
  className: string,
  placeholder?: string,
  value?: string,
  defaultValue?: string
}
export default function Input({ type, className, placeholder }: InputProps) {
  return (
    <input
      value={} 
      type={type}
      className={className}
      placeholder={placeholder}
    />
  );
}
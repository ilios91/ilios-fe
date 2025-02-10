interface ButtonProps {
  className?: string,
  text?: string,
  disabled?: boolean,
}
export default function Button({ className, text, disabled }: ButtonProps) {
  return (
    <button 
      disabled={disabled} 
      className={className}
    >{text}</button>
  );
}
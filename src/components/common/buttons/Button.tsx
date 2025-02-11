interface ButtonProps {
  className?: string,
  text?: string,
  disabled?: boolean,
  onClick? : () => void
}
export default function Button({ className, text, disabled, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled} 
      className={className}
    >{text}</button>
  );
}
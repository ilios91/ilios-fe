interface ButtonProps {
  className?: string,
  text?: string,
  disabled?: boolean,
  handleClick?: () => void
}
export default function Button({ className, text, handleClick, disabled }: ButtonProps) {
  return (
    <button 
      onClick={handleClick} 
      disabled={!disabled} 
      className={className}
    >{text}</button>
  );
}
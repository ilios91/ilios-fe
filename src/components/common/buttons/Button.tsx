interface ButtonProps {
  className?: string,
  text?: string,
  disabled?: boolean,
  onClick?: () => void
}
export default function Button({className, text, onClick, disabled}: ButtonProps) {
  return (
    <button disabled={!disabled} className={className} onClick={onClick}>{text}</button>
  );
}
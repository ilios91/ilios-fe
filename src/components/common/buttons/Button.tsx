interface ButtonProps {
  className?: string,
  text?: string,
  onClick?: () => void
}
export default function Button({className, text, onClick}: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>{text}</button>
  );
}
// import { FormGroupProps } from "../type";
import Input from './Input';

export interface FormGroupProps {
  value: string
  label: string;
  type: string
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChange: () => void
  placeholder?: string
  defaultValue?: string
}


export default function FormGroup({ label, type, value, placeholder, defaultValue, onChange } : FormGroupProps) {
  return (
    <div className="flex flex-col w-[90%] mx-auto gap-y-2">
      <label 
        className="text-[#171717] text-[18px] font-medium leading-[21.94px]" 
        htmlFor=""
        >{label}
      </label>
      <Input
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
}
import { FormGroupProps } from "../type";
import Input from './Input';

export default function FormGroup({ label, label_class, group_class, type } : FormGroupProps) {
  return (
    <div className={group_class}>
      <label className={label_class} htmlFor="">{label}</label>
      {/* <Input /> */}
      {/* <Input /> */}
    </div>
  );
}
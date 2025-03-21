import { Input } from "@/components/ui/input";

interface InputCustomProps {
  classname: string;
  type?: string;
}

export function InputCustom({ classname, type }: InputCustomProps) {
  return <Input type={type} placeholder="Email" className={`${classname}`} />;
}

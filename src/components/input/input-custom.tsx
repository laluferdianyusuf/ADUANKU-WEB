/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input } from "@/components/ui/input";
import { type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface InputCustomProps {
  classname?: string;
  type?: string;
  Icon?: LucideIcon;
  ClearIcon?: LucideIcon;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  isSearch?: boolean;
}

export function InputCustom({
  value,
  classname,
  type = "text",
  Icon,
  ClearIcon,
  onChange,
  onClear,
  isSearch,
}: InputCustomProps) {
  const [clicked, setClicked] = useState<boolean>(false);

  const onClickButton = () => {
    setClicked(!clicked);
  };

  if (!isSearch) {
    return (
      <div className="flex gap-3 items-center rounded-xl border px-3">
        {Icon && <Icon className="text-gray-500" />}
        <Input
          value={value}
          type={type}
          onChange={onChange}
          placeholder="inputing..."
          className={`border-none active:shadow-none active:border-none focus:ring-0 focus:shadow-none focus-visible:ring-0 ${
            classname || ""
          }`}
        />
        {ClearIcon && value && value.length > 0 && (
          <Button variant="ghost" onClick={onClear}>
            <ClearIcon />
          </Button>
        )}
      </div>
    );
  }

  return (
    <div
      className={`flex gap-3 items-center rounded-xl justify-center border transition-all duration-500 ${
        clicked ? "bg-sidebar border" : "border-none"
      }`}
    >
      <Button variant="ghost" onClick={onClickButton}>
        {Icon && <Icon />}
      </Button>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          clicked ? "scale-x-100 opacity-100 w-full" : "scale-x-0 opacity-0 w-0"
        }`}
      >
        <Input
          value={value}
          type={type}
          onChange={onChange}
          placeholder="Searching..."
          className={`ease duration-500 transition-all border-none active:shadow-none active:border-none focus:ring-0 focus:shadow-none focus-visible:ring-0 ${
            classname || ""
          }`}
        />
      </div>

      {ClearIcon && value && value.length > 0 && (
        <Button variant="ghost" onClick={onClear}>
          <ClearIcon />
        </Button>
      )}
    </div>
  );
}

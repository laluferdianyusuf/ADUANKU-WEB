import React from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
interface ButtonProps {
  className?: String;
}

export default function ButtonComponent({ className }: ButtonProps) {
  return (
    <Button className={`${className}`}>
      <Plus />
    </Button>
  );
}

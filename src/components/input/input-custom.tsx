/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input } from "@/components/ui/input";
import { Check, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChangeEvent, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { cn } from "@/lib/utils";

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

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

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
  const [values, setValue] = useState("");

  const onClickButton = () => {
    setClicked((prev) => !prev);
  };

  const onClearButton = () => {
    setValue("");
  };

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const selectedValue = frameworks.find(
      (framework) => framework.value === value
    );
    setValue(selectedValue?.value || value);
  };

  if (!isSearch) {
    return (
      <div className="flex gap-3 items-center rounded-xl border px-3">
        {Icon && <Icon className="text-gray-500" />}
        <Input
          value={values}
          type={type}
          onChange={(e) => setValue(e.target.value)}
          placeholder="inputing..."
          className={`border-none active:shadow-none active:border-none focus:ring-0 focus:shadow-none focus-visible:ring-0 ${
            classname || ""
          }`}
        />
        {ClearIcon && values && values.length > 0 && (
          <Button variant="ghost" onClick={onClearButton}>
            <ClearIcon />
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        className={`flex gap-3 items-center rounded-xl justify-center border transition-all duration-500 ${
          clicked ? "bg-sidebar border" : "border-none"
        }`}
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" onClick={onClickButton}>
              {Icon && <Icon />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{clicked ? "Close Searching" : "Open Searching"}</p>
          </TooltipContent>
        </Tooltip>

        <div
          className={`overflow-hidden transition-all duration-500 ${
            clicked
              ? "scale-x-100 opacity-100 w-full"
              : "scale-x-0 opacity-0 w-0"
          }`}
        >
          <Input
            value={values}
            type={type}
            onChange={onChangeSearch}
            placeholder="Searching..."
            className={`ease duration-500 transition-all border-none active:shadow-none active:border-none focus:ring-0 focus:shadow-none focus-visible:ring-0 ${
              classname || ""
            }`}
          />
        </div>

        {ClearIcon && values && values.length > 0 && (
          <Button variant="ghost" onClick={onClearButton}>
            <ClearIcon />
          </Button>
        )}
      </div>

      {clicked && values.length > 0 && (
        <div
          className={`transition-all duration-500 overflow-hidden absolute left-1/2 transform -translate-x-1/2 bg-sidebar border rounded-xl p-4 mt-4 z-50 shadow-lg w-[700px] max-h-[500px] max-lg:w-[500px] max-sm:w-[300px] max-sm:left-[60%] opacity-100`}
        >
          <Command className="bg-transparent">
            <CommandList>
              {frameworks.filter((framework) =>
                framework.label.toLowerCase().includes(values.toLowerCase())
              ).length === 0 && (
                <CommandEmpty>No framework found.</CommandEmpty>
              )}

              <CommandGroup>
                {frameworks
                  .filter((framework) =>
                    framework.label.toLowerCase().includes(values.toLowerCase())
                  )
                  .map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={() => {
                        setValue(framework.value);
                      }}
                    >
                      {framework.label}
                      <Check
                        className={cn(
                          "ml-auto",
                          values === framework.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      )}
    </div>
  );
}

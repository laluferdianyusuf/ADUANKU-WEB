"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { useLocale } from "use-intl";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import ID from "@/flags/id.svg";
import EN from "@/flags/en.svg";

export default function Switcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localeActive = useLocale();
  const onSelectChange = (lang: string) => {
    startTransition(() => {
      const newPath = pathname.replace(/^\/(id|en)/, `/${lang}`);
      router.replace(newPath);
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {localeActive === "id" ? (
            <Image src={ID} alt="Indonesia Flag" width={20} height={20} />
          ) : (
            <Image src={EN} alt="English Flag" width={20} height={20} />
          )}
          <span className="sr-only">Toggle Languages</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        defaultValue={localeActive}
        aria-disabled={isPending}
      >
        <DropdownMenuItem onClick={() => onSelectChange("id")}>
          Indonesia
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSelectChange("en")}>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

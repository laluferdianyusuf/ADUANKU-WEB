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
import { Globe } from "lucide-react";

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
      <DropdownMenuTrigger asChild className="w-auto">
        <Button variant="ghost" size="icon" className="px-3">
          {localeActive === "id" ? <div>id</div> : <div>en</div>}
          <Globe />
          <span className="sr-only">Toggle Languages</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        defaultValue={localeActive}
        aria-disabled={isPending}
        className="bg-sidebar"
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

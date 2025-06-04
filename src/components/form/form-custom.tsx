"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SquarePlus } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function FormCustom() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  const variable = [
    {
      id: "identitas_pengadu",
      name: "Identitas Pengadu",
      color: "bg-blue-300",
    },
    {
      id: "identitas_pendamping",
      name: "Identitas Pendamping",
      color: "bg-red-300",
    },
    {
      id: "identitas_korban",
      name: "Identitas Korban",
      color: "bg-green-300",
    },
    {
      id: "identitas_pelaku",
      name: "Identitas Pelaku",
      color: "bg-yellow-300",
    },
    {
      id: "kronologi",
      name: "Kronologi",
      color: "bg-orange-300",
    },
  ];
  return (
    // <Form {...form}>
    //   <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
    //     <FormField
    //       control={form.control}
    //       name="username"
    //       render={({ field }) => (
    //         <FormItem>
    //           <FormLabel>Username</FormLabel>
    //           <FormControl>
    //             <Input placeholder="shadcn" {...field} />
    //           </FormControl>
    //           <FormDescription>
    //             This is your public display name.
    //           </FormDescription>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />
    //     <Button type="submit">Submit</Button>
    //   </form>
    // </Form>

    <div className="grid grid-cols-3 gap-2">
      {variable.map((items, idx) => (
        <div
          key={idx}
          className={`${items.color} p-2 border outline-black rounded-md h-[20vh]`}
        >
          <div
            className={`h-full  flex flex-col items-center justify-center font-semibold`}
          >
            {items.name}
            <button className="flex-1 self-end mt-16 mr-2 p-1 rounded-sm bg-cyan-700">
              <SquarePlus size={30} />
            </button>
            <p className="mt-4 italic text-xs capitalize flex self-start ml-3 font-normal">
              * Masukkan detail identitas
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

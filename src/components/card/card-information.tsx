import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  {
    title: "Info 1 ",
    desc: "Lorem",
  },
  {
    title: "Info 2 ",
    desc: "Lorem",
  },
  {
    title: "Info 3 ",
    desc: "Lorem",
  },
  {
    title: "Info 1 ",
    desc: "Lorem",
  },
  {
    title: "Info 2 ",
    desc: "Lorem",
  },
  {
    title: "Info 3 ",
    desc: "Lorem",
  },
];

export default function CardInformation() {
  return (
    <div className="grid grid-cols-3 items-start gap-4">
      {data.map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.desc}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

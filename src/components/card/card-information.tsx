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
interface CardInformationProps {
  onClick: () => void;
}

export default function CardInformation({ onClick }: CardInformationProps) {
  return (
    <div className="grid grid-cols-3 items-start gap-4">
      {data.map((item, index) => (
        <Card onClick={onClick} key={index}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.desc}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-justify truncate">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              harum dignissimos quisquam fuga eum. Aspernatur neque deleniti
              sequi delectus aperiam error vero, recusandae quasi. Perspiciatis
              voluptas nobis magni in fugit corporis reiciendis. A suscipit
              accusantium temporibus dolorem consequatur asperiores praesentium,
              numquam rem nihil perspiciatis quos nam nemo optio delectus
              dolore?
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

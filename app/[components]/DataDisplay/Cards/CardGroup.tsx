import React from "react";
import SingleCard from "./SingleCard";
import { cardType } from "@/app/[types]/card.type";

interface CardGroupProps {
  data: cardType[];
}

export default function CardGroup({ data }: CardGroupProps): JSX.Element {
  return (
    <div className="flex justify-center flex-col md:flex-row gap-3 -mt-10">
      {data.map((item: cardType, index: number) => (
        <SingleCard key={index} data={item} />
      ))}
    </div>
  );
}
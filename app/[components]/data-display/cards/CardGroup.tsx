import React from "react";
import SingleCard from "./SingleCard";
import { tCardType } from "@/app/[types]/card.type";

interface CardGroupProps {
  data: tCardType[];
}

export default function CardGroup({ data }: CardGroupProps): JSX.Element {
  return (
    <div className="flex justify-center flex-col md:flex-row gap-3 -mt-10">
      {data.map((item: tCardType, index: number) => (
        <SingleCard key={index} data={item} />
      ))}
    </div>
  );
}
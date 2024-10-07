import React from "react";
import SingleCard from "./SingleCard";
import { tCardType } from "@/app/[types]/card.type";

export default function CardGroup({ data }: {data: tCardType[]}): JSX.Element {
  return (
    <div className="flex justify-center flex-col md:flex-row gap-3 -mt-10">
      {data.map((item: tCardType, index: number) => (
        <SingleCard key={index} data={item} />
      ))}
    </div>
  );
}
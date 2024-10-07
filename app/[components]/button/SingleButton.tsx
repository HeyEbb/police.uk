"use client";

import Link from "next/link";
import { tButtonType } from "@/app/[types]/button.type";
import button from "@/app/sass/button/button.module.scss";

export default function SingleButton({
  data,
}: {
  data: tButtonType;
}): JSX.Element {
  return (
    <Link href={data.navigate ?? "#"} className="w-full">
      <button className={button.button}>{data.title}</button>
    </Link>
  );
}

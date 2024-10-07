'use client';

import { tButtonType } from "@/app/[types]/button.type";
import button from "@/app/sass/button/button.module.scss";

export default function SingleButton({
  data,
}: {
  data: tButtonType;
}): JSX.Element {
  return (
    <button onClick={data?.onClick} className={button.button}>
      {data.title}
    </button>
  );
}
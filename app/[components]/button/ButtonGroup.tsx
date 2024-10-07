import SingleButton from "./SingleButton";
import { tButtonType } from "@/app/[types]/button.type";
import button from "@/app/sass/button/button.module.scss";

interface ButtonGroupProps {
  data: tButtonType[];
  direction: string;
}

export default function ButtonGroup({
  data,
  direction,
}: ButtonGroupProps): JSX.Element {
  return (
    <div
      className={
        `${(direction === "col" ? "flex-row " : "flex-col ")}` + button.container
      }
    >
      {data.map((item: tButtonType, index: number) => (
        <SingleButton key={index} data={item} />
      ))}
    </div>
  );
}

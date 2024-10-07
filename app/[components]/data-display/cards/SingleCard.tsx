import { tCardType } from "@/app/[types]/card.type";
import card from "@/app/sass/card/card.module.scss";
import ButtonGroup from "../../button/ButtonGroup";

export default function SingleCard({ data }: { data: tCardType }): JSX.Element {
  return (
    <article className={card.card}>
      <div>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
      <section className="mt-4">
        <ButtonGroup data={data.buttons} direction="col" />
      </section>
    </article>
  );
}

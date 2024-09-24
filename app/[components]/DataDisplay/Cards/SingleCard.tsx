import { cardType } from "@/app/[types]/card.type";

export default function SingleCard({ data }: { data: cardType }): JSX.Element {
  return (
    <div className="bg-white border border-neutral-300 rounded-md p-6 w-full">
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <button>
                
      </button>
    </div>
  );
}

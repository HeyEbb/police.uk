interface SingleCardProps {
  item: {
    title: string;
    description: string;
    link: string;
  };
}

export default function SingleCard({ data }: SingleCardProps[]) {
  return (
    <div className="bg-yellow-400 border border-black">
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <a href={data.link}>Link</a>
    </div>
  );
}

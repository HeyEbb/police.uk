import LandingHero from "./[components]/Landing/LandingHero";
import CardGroup from "./[components]/DataDisplay/Cards/CardGroup";

export default function Home() {

  interface Data {
    title: string;
    description: string;
    link: string;
  }

  const data: Data[] = [
    {
      title: "Title 1",
      description: "Description 1",
      link: 'https://www.google.com',
    },
    {
      title: "Title 2",
      description: "Description 2",
      link: 'https://www.google.com',
    },
    {
      title: "Title 3",
      description: "Description 3",
      link: 'https://www.google.com',
    },
    {
      title: "Title 4",
      description: "Description 4",
      link: 'https://www.google.com',
    },
  ]

  return (
    <>
      <LandingHero />
      <CardGroup data={data} />
    </>
  );
}
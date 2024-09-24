import LandingHero from "./[components]/Landing/LandingHero";
import CardGroup from "./[components]/DataDisplay/Cards/CardGroup";
import { cardType } from "./[types]/card.type";

export default function Home() {
  
  const data: cardType[] = [
    {
      title: "Contact & Report",
      description: "How to contact your local force and report a crime.",
      link: "https://www.google.com",
    },
    {
      title: "Information",
      description: "Information on different types of crime.",
      link: "https://www.google.com",
    },
    {
      title: "Support",
      description: "Getting help and support from the police.",
      link: "https://www.google.com",
    },
    {
      title: "Crime Statistics",
      description: "View crime statistics from around the UK.",
      link: "https://www.google.com",
    },
  ];

  return (
    <>
      <LandingHero />
      <div className="px-6">
        <CardGroup data={data} />
      </div>
    </>
  );
}

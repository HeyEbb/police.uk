import LandingHero from "./[components]/landing-page/LandingHero";
import CardGroup from "./[components]/data-display/cards/CardGroup";
import { tCardType } from "./[types]/card.type";

export default function Home() {
  const data: tCardType[] = [
    {
      title: "Contact & Report",
      description: "How to contact your local force and report a crime.",
      buttons: [
        {
          title: "Contact",
          url: "https://www.google.com",
        },
        {
          title: "Report",
          url: "https://www.google.com",
        },
      ],
    },
    {
      title: "Information",
      description: "Information on different types of crime.",
      buttons: [
        {
          title: "Fraud",
          url: "https://www.google.com",
        },
      ],
    },
    {
      title: "Support",
      description: "Getting help and support from the police.",
      buttons: [
        {
          title: "Fraud",
          url: "https://www.google.com",
        },
      ],
    },
    {
      title: "Crime Statistics",
      description: "View crime statistics from around the UK.",
      buttons: [
        {
          title: "Fraud",
          url: "https://www.google.com",
        },
      ],
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

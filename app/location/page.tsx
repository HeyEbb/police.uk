"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Hero from "../sass/hero/hero.module.scss";

export default function Location() {
  /* ---------------------------------- state --------------------------------- */
  const [crimes, setCrimes] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  /* ------------------------------ handle params ----------------------------- */
  const searchParams = useSearchParams();
  const postcode = searchParams.get('postcode')
  const lat = searchParams.get("lat");
  const long = searchParams.get("long");

  useEffect(() => {
    if (lat && long) {
      fetchPoliceData({
        lat: parseFloat(lat),
        long: parseFloat(long),
        date: "2021-07",
      });
    }
  }, [lat, long]);

  // testing it works...
  useEffect(() => {
    console.log(crimes);
  }, [crimes]);

  /* -------------------------------- functions ------------------------------- */
  function fetchPoliceData({
    lat,
    long,
    date,
  }: {
    lat: number;
    long: number;
    date: string;
  }) {
    fetch(
      `https://data.police.uk/api/crimes-street/all-crime?data=${date}&lat=${lat}&lng=${long}`
    )
      .then((res) => res.json())
      .then((data) => setCrimes(data))
      .catch((err) => console.error(err));
  }

  return (
    <>
      <header className={Hero.regular + " core-container"}>
        <div className={Hero.inner}>
          <h1>Results for {postcode?.split('_').join(' ')}</h1>
          <p>
            Sint dolore qui id consectetur Lorem. Quis dolore deserunt eu
            commodo labore ea in elit magna officia. Non do dolore eu duis
            officia id nisi. Reprehenderit mollit duis eu velit esse sit mollit
            labore ex et. Elit irure adipisicing aute minim nisi minim velit
            culpa labore.
          </p>
        </div>
      </header>
      
    </>
  );
}

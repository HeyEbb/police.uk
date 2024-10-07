"use client";

import { useEffect, useState } from "react";

export default function LandingHero() {
  const [inputValue, setInputValue] = useState<string>("");
  const [crimes, setCrimes] = useState<any[]>([]);

  function fetchCrimes(postcode: string) {
    fetch(`https://api.postcodes.io/postcodes/${postcode}`)
      .then((res) => res.json())
      .then((data) =>
        fetchPoliceData({
          lat: data?.result.latitude,
          long: data?.result.longitude,
          date: "2024-10",
        })
      )
      .catch((err) => console.error(err));
  }

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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetchCrimes(inputValue);
  }

  return (
    <section className="w-full rounded-md bg-green-600 core-container md:h-[700px] h-[50vh] flex flex-col justify-center items-center p-8 md:p-52 text-center">
      <h1>Find where crimes are happening near you</h1>
      <p>
        Curious about the crime rates in your neighborhood? Simply enter your
        postcode below to access detailed crime data for your area. We'll
        provide insights into various crime types, trends, and statistics.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex mt-7">
          <input
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your postcode"
          />
          <button type="submit">Search</button>
        </div>
      </form>
    </section>
  );
}

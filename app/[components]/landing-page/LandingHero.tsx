"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PoliceBackground from "../../src/img/police-hero.jpg"; // Ensure the path is correct

function LandingHero() {
  const [inputValue, setInputValue] = useState<string>("");
  const router = useRouter();

  function fetchCrimes(postcode: string) {
    fetch(`https://api.postcodes.io/postcodes/${postcode}`)
      .then((res) => res.json())
      .then((data) =>
        router.push(
          `/location?postcode=${data?.result.postcode.replace(/ /g, "_")}&lat=${
            data?.result.latitude
          }&long=${data?.result.longitude}`
        )
      )
      .catch((err) => console.error(err));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetchCrimes(inputValue);
  }

  return (
    <section
      className="w-full rounded-md core-container md:h-[700px] h-[50vh] flex flex-col justify-center items-center p-8 md:p-52 text-center relative -z-10"
      style={{
        backgroundImage: `url(${PoliceBackground.src})`, // Use .src to get the correct URL
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 -z-10 rounded-md"></div>{" "}
      Overlay
      <h1 className="relative z-10 text-white">
        Find where crimes are happening near you
      </h1>
      <p className="relative z-10 text-white">
        Curious about the crime rates in your neighborhood? Simply enter your
        postcode below to access detailed crime data for your area. We'll
        provide insights into various crime types, trends, and statistics.
      </p>
      <form onSubmit={handleSubmit} className="relative z-10">
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

export default LandingHero;

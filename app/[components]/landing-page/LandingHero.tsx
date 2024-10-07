export default function LandingHero() {
  return (
    <section className="w-full bg-green-600 core-container md:h-[700px] h-[50vh] flex flex-col justify-center items-center p-8 md:p-52 text-center">
      <h1>Find where crimes are happening near you</h1>
      <p>
        Curious about the crime rates in your neighborhood? Simply enter your
        postcode below to access detailed crime data for your area. We'll
        provide insights into various crime types, trends, and statistics.
      </p>
      <form>
        <div className="flex mt-7">
          <input type="text" placeholder="Enter your postcode" />
          <button>Search</button>
        </div>
      </form>
    </section>
  );
}

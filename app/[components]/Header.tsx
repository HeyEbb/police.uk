import Logo from "../src/img/puk-logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <>
      {/* container */}
      <section className="w-full bg-blue-600 flex justify-center items-center px-5 h-16">
        <span className="core-container bg-green-500 flex justify-between ">
          <span>UK Police Scanner</span>
          {/* <Image
            className="p-3"
            src={Logo}
            alt="logo"
            width={100}
            height={100}
          /> */}
          <nav className="flex gap-4 ">
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
        </span>
      </section>
    </>
  );
}

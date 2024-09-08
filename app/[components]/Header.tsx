import Logo from "../src/img/puk-logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <>
      {/* container */}
      <section className="core-container bg-blue-600 flex justify-between items-center px-5">
        <Image className="p-3" src={Logo} alt="logo" width={200} height={200} />
        <nav className="flex gap-4 ">
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
      </section>
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Logo from "../src/img/puk-logo.png";
import Image from "next/image";
import { LuMenu, LuX } from "react-icons/lu";

// styles
import header from "../sass/header/header.module.scss";

export default function Header() {
  /* --------------------------------- states --------------------------------- */
  const [siderOpen, setSiderOpen] = useState(false);

  useEffect(() => {
    if (siderOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [siderOpen]);

  const navigationData = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Contact",
      link: "/contact",
    },
  ];

  /* --------------------------------- markup --------------------------------- */
  return (
    <>
      {/* container */}
      <section className={header.bar}>
        <span className={header.inner + " core-container"}>
          <Image src={Logo} alt="Police UK logo" width={150} height={100} />
          <span className="flex">
            <LuMenu
              className={header.icon}
              onClick={() => setSiderOpen(!siderOpen)}
            />
            <nav className={header.navigation}>
              {navigationData.map((item) => (
                <a key={item.id} href={item.link}>
                  {item.name}
                </a>
              ))}
            </nav>
          </span>
        </span>
      </section>

      {/* sidebar */}
      {siderOpen && (
        <section className="bg-gray-900 absolute left-0 h-[100vh] w-80 p-4">
          {/* header of siderbar */}
          <div className=" w-full flex justify-between items-center">
            <h3 className="text-white m-0">Sidebar title here</h3>
            <LuX
              className={header.closeIcon}
              onClick={() => setSiderOpen(false)}
            />
          </div>
          <hr className="border-gray-700 my-4" />
          {/* pages */}
          <nav className="flex flex-col gap-1">
            {navigationData.map((item) => (
              <a key={item.id} href={item.link} className={header.mobileItem}>
                {item.name}
              </a>
            ))}
          </nav>
        </section>
      )}
    </>
  );
}

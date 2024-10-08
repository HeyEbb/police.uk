"use client";

import { useState } from "react";
import Logo from "../src/img/puk-logo.png";
import Image from "next/image";
import { LuMenu, LuX } from "react-icons/lu";

// styles
import header from "../sass/header/header.module.scss";

export default function Header() {
  /* --------------------------------- states --------------------------------- */
  const [siderOpen, setSiderOpen] = useState(false);

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
      <section className="w-full bg-blue-600 flex justify-center items-center px-5 h-16">
        <span className="core-container flex justify-between items-center">
          <Image
            className="p-3"
            src={Logo}
            alt="logo"
            width={100}
            height={100}
          />
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
        <section className="bg-gray-800 absolute left-0 h-[100vh] w-80">
          {/* header of siderbar */}
          <div className=" w-full flex justify-between p-3">
            <h3 className="text-white mb-0">Sidebar title here</h3>
            <LuX
              className={header.closeIcon}
              onClick={() => setSiderOpen(false)}
            />
          </div>
          <hr/>
          {/* pages */}
          <nav className="flex flex-col m-3 gap-1">
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

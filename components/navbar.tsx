import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { toggle } from "../scripts/toggle";
import styles from "../styles/components/Navbar.module.css";

const Navbar: NextPage = () => {
  const liProps = "hover:bg-black rounded-3xl";

  // home text-gray-900/ otros text-gray-500
  const aGeneralProps =
    "block py-2 px-3 md:p-0 md:border-0 rounded-3xl hover:text-white shadow-inner hover:shadow-none transition ease-in-out delay-50 hover:-translate-y-0.5";
  const aHomeProps = aGeneralProps + " home text-gray-900";
  const aOthersProps = aGeneralProps + " home text-gray-500";

  return (
    <nav className="sticky top-0 bg-white shadow-2xl border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center">
          <img
            src="https://akspan12.github.io/backend.png"
            className="mr-3 h-6 sm:h-9"
            alt="Code logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap hover:text-black">
            Nicolas Malinarich
          </span>
        </div>
        <div
          id="hamburger"
          onClick={() => toggle()}
          className="md:hidden w-10 h-10 cursor-pointer transition ease-in-out delay-100 hover:translate-y-1 hover:scale-110"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/344/hamburger.png"
            alt="hamburger"
          />
        </div>
        <div
          className="hidden text-center transition delay-75 ease-in-out w-full md:block md:w-auto"
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-2 md:mt-0 md:text-sm md:font-medium">
            <li className={liProps}>
              <a href="#" className={aHomeProps}>
                Home
              </a>
            </li>
            <li className={liProps}>
              <a href="#" className={aOthersProps}>
                About me
              </a>
            </li>
            <li className={liProps}>
              <a href="#" className={aOthersProps}>
                Skills
              </a>
            </li>
            <li className={liProps}>
              <a href="#" className={aOthersProps}>
                Hobbies
              </a>
            </li>
            <li className={liProps}>
              <a href="#" className={aOthersProps}>
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

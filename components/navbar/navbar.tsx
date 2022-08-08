import { toggle } from "./helpers";
import { navbarButtons, pageName } from "./constants";
import Image from "next/image";

export const Navbar = (): JSX.Element => {
  return (
    <nav className="bg-transparent top-0 border-gray-200 px-2 sm:px-4 py-2.5 rounded-b-lg dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center">
          <div className="mr-2 flex justify-center">
            <Image
              src="/images/coding.png"
              width={30}
              height={30}
              alt="Code logo"
            />
          </div>
          <span className="text-white self-center text-xl font-semibold whitespace-nowrap">
            {pageName}
          </span>
        </div>
        <div
          id="hamburger"
          onClick={() => toggle()}
          className="md:hidden w-10 h-10 cursor-pointer transition ease-in-out delay-100 hover:translate-y-1 hover:scale-102"
        >
          <img src="/images/menu-white.png" alt="hamburger" />
        </div>
        <div
          className="hidden text-center transition delay-75 ease-in-out w-full md:block md:w-auto"
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-2 md:mt-0 md:text-sm md:font-medium">
            {navbarButtons.map((name, index) => {
              return (
                <li
                  key={`${name}-${index}`}
                  className="hover:bg-customFourthColor rounded-3xl"
                >
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 md:border-0 rounded-3xl text-white hover:text-black shadow-inner transition ease-in-out delay-50 hover:-translate-y-0.5"
                  >
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

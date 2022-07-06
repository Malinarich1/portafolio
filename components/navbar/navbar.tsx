import { toggle } from "./helpers";
import { navbarButtons, pageName } from "./constants";

export const Navbar = (): JSX.Element => {
  return (
    <nav className="bg-gradient-to-r from-customPrimaryColor to-customFourthColor sticky top-0 shadow-2xl border-gray-200 px-2 sm:px-4 py-2.5 rounded-b-lg dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center">
          <img
            src="/images/panda.png"
            className="mr-3 h-6 sm:h-9"
            alt="Code logo"
          />
          <span className="text-customSecondaryColor self-center text-xl font-semibold whitespace-nowrap">
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
            {navbarButtons.map((name) => {
              return (
                <li className="hover:bg-customFourthColor rounded-3xl">
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 md:border-0 rounded-3xl text-customSecondaryColor hover:text-customThirdColor shadow-inner transition ease-in-out delay-50 hover:-translate-y-0.5"
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

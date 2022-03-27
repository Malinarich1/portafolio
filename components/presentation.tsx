import type { NextPage } from "next";

const Presentation: NextPage = () => {
  const presentation =
    "Hi, my name is Nicolas Malinarich and i am front-end developer";
  return (
    <div className="bg-gradient-to-b from-black to-white rounded-b-3xl">
      <div className="h-96 flex justify-center item">
        <h1 className="md:text-white md:max-w-sm lg:text-purple-600 mt-36 hidden md:block  font-sans text-2xl subpixel-antialiased font-bold text-center px-5 mb-3">
          {presentation}
        </h1>
        <img
          className="mt-10 md:mr-10 max-h-80 rounded-full"
          src="/images/presentation/goku-ssj50.jpg"
          alt="profile photo"
        />
      </div>
      <div className="min-h-20 flex justify-center item rounded-b-3xl md:hidden">
        <h1 className="font-sans text-2xl subpixel-antialiased font-bold text-center px-5 mb-3">
          {presentation}
        </h1>
      </div>
    </div>
  );
};

export default Presentation;

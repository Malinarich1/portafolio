import type { NextPage } from "next";

const Presentation: NextPage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-300 rounded-b-3xl">
      <div className="h-96 flex justify-center item">
        <img
          className="mt-10 max-h-80 rounded-full"
          src="/images/presentation/goku-ssj50.jpg"
          alt="profile photo"
        />
      </div>
      <div className="h-96 flex justify-center item rounded-b-3xl">
        <h1 className="font-sans text-2xl subpixel-antialiased font-bold text-center">
          Hi, my name is Nicolas Malinarich and i am a{" "}
          <a className="underline decoration-sky-500">front-end</a> developer
        </h1>
      </div>
    </div>
  );
};

export default Presentation;

import Image from "next/image";
import { skills } from "./constants";

export const Skills = (): JSX.Element => {
  return (
    <div className="mt-20">
      <h1 className="text-6xl font-mono text-center text-white pt-5">Skills</h1>
      <div className="flex items-center justify-center pt-16">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-x-20 md:gap-x-40 gap-y-16 max-w-3xl">
          {skills.map(({ name, image }, index) => {
            return (
              <div className="grid grid-cols-1" key={index}>
                <h1 className="text-center text-xl text-white font-mono">
                  {name}
                </h1>
                <div className="flex items-center justify-center pt-3">
                  <Image src={image} height={70} width={70} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

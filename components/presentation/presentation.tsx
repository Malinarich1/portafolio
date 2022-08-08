import { presentationText } from "./constants";
import Image from "next/image";

export const Presentation = (): JSX.Element => {
  return (
    <>
      <h1 className="text-6xl font-mono text-center text-white pt-5">¡Hola!</h1>

      <div className="flex items-center justify-center pt-5">
        <p className="text-white text-center max-w-3xl font-mono">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
          voluptatibus voluptates necessitatibus earum ab cupiditate, vel nisi
          quam suscipit modi et error rem aut, deleniti illo. Tempore
          praesentium ad voluptatem.
        </p>
      </div>
      <div className="flex items-center justify-center pt-5">
        <Image
          className="rounded-full"
          src="/images/presentation/profile-photo.webp"
          alt="foto de perfil"
          width={250}
          height={250}
          objectFit="contain"
          quality={70}
        />
      </div>
    </>
  );
};

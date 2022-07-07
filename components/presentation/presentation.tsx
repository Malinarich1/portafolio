import { presentationText } from "./constants";
import Image from "next/image";

export const Presentation = (): JSX.Element => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center item">
        <div className="md:mr-10 md:mt-16 flex items-center justify-center md:justify-end mt-6">
          <Image
            className="rounded-full"
            src="/images/presentation/profile-photo.png"
            alt="profile photo"
            width={250}
            height={250}
            objectFit="contain"
            quality={50}
          ></Image>
        </div>
        <div className="flex items-center justify-center my-10 md:justify-start md:mt-20">
          <div className="max-w-xs min-h-20 bg-gradient-to-r from-customPrimaryColor to-customFourthColor mx-4 pb-4 py-4 border-1 item rounded-3xl">
            <h1 className="font-semibold text-2xl text-center px-3 text-customSecondaryColor">
              {presentationText}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

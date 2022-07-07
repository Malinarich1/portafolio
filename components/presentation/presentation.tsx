import { presentationText } from "./constants";

export const Presentation = (): JSX.Element => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center item">
        <div className="flex items-center justify-center md:justify-end">
          <img
            className="mt-10 md:mr-10 max-h-80 rounded-full border-1"
            src="/images/presentation/profile-photo.png"
            alt="profile photo"
          />
        </div>
        <div className="flex items-center justify-center my-10 md:justify-start md:mt-16">
          <div className="max-w-md min-h-20 bg-gradient-to-r from-customPrimaryColor to-customFourthColor mx-4 pb-4 py-4 border-1 item rounded-3xl">
            <h1 className="font-semibold text-2xl text-center px-3 text-customSecondaryColor">
              {presentationText}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar";

const Home: NextPage = () => {
  return (
    <div className="mx-4">
      <Head>
        <title>Nicolas Malinarich</title>
        <meta
          name="Nicolas Malinarich"
          content="The contend is about me, my skills, hobbies and you can contact me if you want"
        />
        <link rel="icon" href="https://akspan12.github.io/backend.png" />
      </Head>

      <Navbar />

      <div className="flex justify-center mt-20">
        <img
          src="http://cucsa.org.uk/wp-content/uploads/2015/10/Work_In_Progress.png"
          alt="Working on it!"
        />
      </div>
    </div>
  );
};

export default Home;

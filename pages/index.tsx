import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/navbar";
import Presentation from "../components/presentation";
import WorkingOnIt from "../components/workingOnIt";

const Home: NextPage = () => {
  return (
    <div className="mx-4">
      <Head>
        <title>Nicolas Malinarich</title>
        <meta
          name="Nicolas Malinarich"
          content="The contend is about me, my skills, hobbies and you can contact me if you want"
        />
        <link rel="icon" href="/images/panda.png" />
      </Head>
      <Navbar />
      <Presentation />
      <WorkingOnIt />
      <WorkingOnIt />
      <WorkingOnIt />
      <WorkingOnIt />
      ohla
    </div>
  );
};

export default Home;

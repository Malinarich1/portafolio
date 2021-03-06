import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/navbar";
import { Presentation } from "../components/presentation";
import WorkingOnIt from "../components/workingOnIt";

const Home: NextPage = () => {
  return (
    <div className="bg-gradient-to-r from-customThirdColor to-customSecondaryColor">
      <Head>
        <title>Nicolas Malinarich</title>
        <meta
          name="google-site-verification"
          content="-X15LeB2fDAEe0z0VENgMNIa5-59BEw_qXXj9bzDXIk"
        />
        <link rel="icon" href="/images/panda.png" />
      </Head>
      <Navbar />
      <Presentation />
      <WorkingOnIt />
      <WorkingOnIt />
      <WorkingOnIt />
      <WorkingOnIt />
    </div>
  );
};

export default Home;

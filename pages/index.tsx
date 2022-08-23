import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/navbar";
import { Presentation } from "../components/presentation";
import { Skills } from "../components/skills";
import WorkingOnIt from "../components/workingOnIt";
import { personSchema } from "../schemas/personSchema";

const Home: NextPage = () => {
  return (
    <div className="bg-infiniteStars bg-fixed">
      <Head>
        <title>Nicolas Malinarich FullStack Developer</title>
        <meta
          name="description"
          content="Hello, my name is nicolas malinarich and I am a developer and I am willing to accept all kinds of challenges in order to grow in this industry."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <meta
          name="google-site-verification"
          content="-X15LeB2fDAEe0z0VENgMNIa5-59BEw_qXXj9bzDXIk"
        />
        <link rel="icon" href="/images/coding.png" />
      </Head>
      <Navbar />
      <Presentation />
      <Skills />
      <WorkingOnIt />
      <WorkingOnIt />
      <WorkingOnIt />
    </div>
  );
};

export default Home;

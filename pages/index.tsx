import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/navbar";
import { Presentation } from "../components/presentation";
import WorkingOnIt from "../components/workingOnIt";

const Home: NextPage = () => {
  return (
    <div className="bg-infiniteStars bg-fixed">
      <Head>
        <title>Nicolas Malinarich</title>
        <meta
          name="google-site-verification"
          content="-X15LeB2fDAEe0z0VENgMNIa5-59BEw_qXXj9bzDXIk"
        />
        <script type="application/ld+json">
          {{
            "@context": "http://www.schema.org",
            "@type": "person",
            name: "Nicolas Andres Castro Malinarich",
            jobTitle: "Developer",
            url: "https://www.nicolasmalinarich.cl/",
            address: {
              "@type": "PostalAddress",
              streetAddress: "avenida manuel antonio matta #0562",
              addressLocality: "Quilicura",
              addressRegion: "Region metropolitana",
              postalCode: "8730286",
              addressCountry: "Chile",
            },
            email: "nicolas.malinarich@hotmail.com",
            telephone: "+56968300885",
            birthDate: "1997-05-10",
            sameAs: [
              "https://www.facebook.com/nicolas.malinarich",
              "https://www.instagram.com/_malinarich_/",
              "https://www.linkedin.com/in/nicolas-malinarich/",
              "wwwhttps://www.nicolasmalinarich.cl/",
              "https://github.com/Malinarich1",
            ],
          }}
        </script>
        <link rel="icon" href="/images/coding.png" />
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

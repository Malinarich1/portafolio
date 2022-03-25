import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
//import styles from "../styles/components/Navbar.module.css";

const Navbar: NextPage = () => {
  return (
    <nav>
      <h1>Nicolas Malinarich</h1>
      <div>
        holaaaaaaaaaaaaaaaaaaa
        <a href="#">About</a>
        <a href="#">Skill</a>
        <a href="#">Hobbies</a>
      </div>
      <button className="hamburger">
        <span>a</span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;

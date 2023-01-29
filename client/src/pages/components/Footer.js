import React from "react";
import styles from "../../styles/Home.module.css";

import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full " id={styles.mai}>
      <div className="flex justify-between items-center md:w-[80%] mx-auto  py-2 text-lg font-semibold text-gray-400">
        <div>
          <h1 className="text-sm md:text-lg">© 2022 . All rights reserved</h1>{" "}
        </div>

        <div className="flex items-center gap-6">
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default Footer;

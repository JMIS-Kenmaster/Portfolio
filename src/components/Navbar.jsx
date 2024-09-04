import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h2 className="mx-2 w-10">JMIS</h2>
      </div>
      <div className="m-8 flex items-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaFacebook />
      </div>
    </nav>
  );
};

export default Navbar;

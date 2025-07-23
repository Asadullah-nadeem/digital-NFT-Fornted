import React from "react";


const Footer = () => {

  const cy = new Date().getFullYear();
  return (
    <footer
      id="site-footer"
      className="flex bg-gradient-to-r from-[#00000000] via-[#00000000] to-[#00000000] shadow-lg border- mt-16 py-8"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div>
          &copy; {cy} OopsFire Wolf. All rights reserved. Developed by Asadullah Nadeem
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6">
      <span className="font-orbitron text-2xl font-extrabold bg-gradient-to-r from-[#ffffff] to-[#ffffff] bg-clip-text text-transparent tracking-wider pl-12 relative">
        OopsFire Wolf
      </span>
      <a
        href="https://github.com/asadullah-nadeem"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-lg font-medium flex items-center gap-2"
      >
        <FaGithub className="text-xl" /> GitHub
      </a>
    </header>
  );
};

export default Header;

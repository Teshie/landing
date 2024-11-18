import React, { useState } from "react";
import logo from "./../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-black p-4 shadow-md fixed top-0 left-0 w-full z-10">
      <div className="flex justify-between items-center">
        {/* Hamburger Icon */}
        <div
          className="text-white md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>

        {/* Logo */}
        <div className="text-white font-bold text-lg">
          <img
            src={logo} // Replace with your logo's path
            alt="Logo"
            className="h-10"
          />
        </div>

        {/* Menu for Desktop */}
        <nav className="hidden md:flex space-x-6 text-white">
          <a href="#" className="hover:underline">
            አገልግሎቶች
          </a>
          <a href="#" className="hover:underline">
            አማካሪዎች
          </a>
          <a href="#" className="hover:underline">
            እኛ ማን ነን
          </a>
          <a href="#" className="hover:underline">
            መገኘት እና ስራዎች
          </a>
          <a href="#" className="hover:underline">
            ፖሊሲ በዝህ
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-1/2 bg-blue-500 text-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white text-xl"
          onClick={toggleMenu}
        >
          &times;
        </button>
        <nav className="flex flex-col items-start justify-start mt-14 p-4 h-full space-y-6">
          <a
            href="#"
            className="flex items-center space-x-4 text-lg hover:underline"
            onClick={closeMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <span>አገልግሎቶች</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-4 text-lg hover:underline"
            onClick={closeMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3v18l9-9-9-9z"
              />
            </svg>
            <span>አማካሪዎች</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-4 text-lg hover:underline"
            onClick={closeMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2a10 10 0 0110 10 10 10 0 01-20 0 10 10 0 0110-10z"
              />
            </svg>
            <span>እኛ ማን ነን</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-4 text-lg hover:underline"
            onClick={closeMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h8m-4-4v8"
              />
            </svg>
            <span>መገኘት እና ስራዎች</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-4 text-lg hover:underline"
            onClick={closeMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 5l14 14M5 19l14-14"
              />
            </svg>
            <span>ፖሊሲ በዝህ</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

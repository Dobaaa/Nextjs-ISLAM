"use client";
import React, { useState } from "react";
import "./Nav.css";
import Logo from "../../assets/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-transpernt text-black p-4 me-3 ms-3 ps-8 pe-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Image src={Logo} />
        </div>

        {/* Links for large screens */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-[var(--main)]">
            Home
          </a>

          <a href="#" className="hover:text-[var(--main)]">
            Home
          </a>
          <a href="#" className="hover:text-[var(--main)]">
            Home
          </a>
          <a href="#" className="hover:text-[var(--main)]">
            assasa
          </a>
          <div className="relative group">
            <button className="hover:text-[var(--main)]">
              English <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <div className="absolute hidden group-hover:block bg-gray-800 text-white py-2 mt-1 rounded shadow-lg">
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Arabic
              </a>
            </div>
          </div>
        </div>

        {/* Links on the right */}
        <div className="hidden md:flex space-x-6 md:items-center">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-[var(--main)]"
          />
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-[var(--main)]"
          />
          <Link href="/" className="text-[var(--main)] login-btn">
            Login
          </Link>
        </div>

        {/* Menu toggle for small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown menu for small screens */}
      {isMenuOpen && (
        <div className="md:hidden">
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            sasas
          </a>
          <div className="relative group">
            <button className="block px-4 py-2 hover:bg-gray-700">
              English
            </button>
            <div className="bg-gray-800 text-white py-2 rounded shadow-lg">
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Arabica
              </a>
            </div>
          </div>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            Home
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            Home
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            Login
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;

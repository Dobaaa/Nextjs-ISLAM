"use client";
import React, { useState } from "react";
import "./Nav.css";
import Logo from "../../assets/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Nav = () => {
  const t = useTranslations("HomePage");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (language) => {
    const endpoint = language === "ar" ? "/ar" : "/en";
    window.location.href = `http://localhost:3000${endpoint}`;
  };

  return (
    <nav className="bg-transparent text-black p-4 me-3 ms-3 ps-8 pe-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Image src={Logo} alt="Logo" />
        </div>

        {/* Links for large screens */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-[var(--main)]">
            {t("homeNav")}
          </a>
          <a href="#" className="hover:text-[var(--main)]">
            {t("aboutUsNav")}
          </a>
          <a href="#" className="hover:text-[var(--main)]">
            {t("courseNav")}
          </a>
          <a href="#" className="hover:text-[var(--main)]">
            {t("shopNav")}
          </a>
          <div className="relative group">
            <button
              onClick={() => handleLanguageChange("en")}
              className="hover:text-[var(--main)]"
            >
              English <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <div className="absolute hidden group-hover:block bg-gray-800 text-white py-2 mt-1 rounded shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-700"
                onClick={() => handleLanguageChange("ar")}
              >
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
            {t("login")}
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
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown menu for small screens */}
      {isMenuOpen && (
        <div className="md:hidden">
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            {t("homeNav")}
          </a>
          <div className="relative group">
            <button
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={() => handleLanguageChange("ar")}
            >
              Arabic
            </button>
            <button
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={() => handleLanguageChange("en")}
            >
              English
            </button>
          </div>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            {t("aboutUsNav")}
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            {t("courseNav")}
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

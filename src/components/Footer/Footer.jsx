import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FotterLogo from "../../assets/footerlogo.png";
import FotterGoogle from "../../assets/google.png";
import FotterApple from "../../assets/apple.png";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footer bg-[var(--main)] ">
      <div className="footer-container flex flex-col items-center md:flex-row md:justify-between p-12 text-[var(--white)]">
        <div className="socail-media">
          <h5 className="font-bold">
            Join our newsletter for latest courses updates
          </h5>
          <div className="email-btn flex mt-5 relative">
            <input
              type="email"
              className="focus:outline-none p-3 w-[100%] "
              id=""
              placeholder="Enter your email address"
            />
            <input
              type="submit"
              value="Submit"
              className="bg-[var(--main)] absolute top-1 right-1 p-2 cursor-pointer"
            />
          </div>
          <div className="socail-icons flex mt-4 gap-2">
            <span>Social media</span>
            <div className="flex gap-2">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-2xl cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-2xl cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-2xl cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-2xl cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-2xl cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="fotter-links flex gap-12 p-5 lg:gap-6">
          <ul>
            <li className="font-bold  mb-4">Support</li>
            <li className="mb-3 cursor-pointer">Help Center</li>
            <li className="mb-3 cursor-pointer">Privacy Policy</li>
            <li className="mb-3 cursor-pointer">Conditions</li>
            <li>User Manual</li>
          </ul>
          <ul>
            <li className="font-bold mb-4">About Us</li>
            <li className="mb-3 cursor-pointer">Get in touch with us</li>
            <li className="mb-3 cursor-pointer">About Us</li>
            <li className="mb-3 cursor-pointer">Join Us</li>
            <li className="mb-3 cursor-pointer">Book physical appointment</li>
          </ul>
        </div>
        <div className="footer-logo ">
          <Image src={FotterLogo} alt="" srcset="" className="mb-5 flex " />
          <h5 className="text-start mb-1">Download our app</h5>
          <div className="mobileApp-btns flex gap-2 ">
            <Image
              src={FotterGoogle}
              className="max-w-[100px] cursor-pointer"
            />
            <Image src={FotterApple} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

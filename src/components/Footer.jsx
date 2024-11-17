import { Link } from "react-router-dom";

import companyLogoWhite from "../assets/images/logo-white.svg";
import facebookLogo from "../assets/images/icon-facebook.svg";
import youtubeLogo from "../assets/images/icon-youtube.svg";
import twitterLogo from "../assets/images/icon-twitter.svg";
import pinterestLogo from "../assets/images/icon-pinterest.svg";
import instagramLogo from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="bg-veryDarkBlue">
      {/* Flex Container */}
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* Logo and social links container */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="sr-only mx-auto my-6 text-center text-white md:hidden">
            Copyright © 2022, All Rights Reserved
          </div>
          {/* Logo */}
          {/* <div>
            <img src={companyLogoWhite} className='h-8' alt='' />
          </div> */}
          {/* Social Links Container */}
          <div className="flex justify-center space-x-4">
            {/* Link 1 */}
            <Link to="#">
              <img src={facebookLogo} className="h-8" alt="" />
            </Link>
            {/* Link 2 */}
            <Link to="#">
              <img src={youtubeLogo} className="h-8" alt="" />
            </Link>
            {/* Link 3 */}
            <Link to="#">
              <img src={twitterLogo} className="h-8" alt="" />
            </Link>
            {/* Link 4 */}
            <Link to="#">
              <img src={pinterestLogo} className="h-8" alt="" />
            </Link>
            {/* Link 5 */}
            <Link to="#">
              <img src={instagramLogo} className="h-8" alt="" />
            </Link>
          </div>
        </div>
        {/* List Container */}

        {/* Input Container */}
        <div className="flex flex-col justify-between">
          <div className="hidden text-white md:block">
            Enable ET © 2024, All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

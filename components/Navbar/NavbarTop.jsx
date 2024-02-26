import React from "react";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { BsTelephoneFill } from "react-icons/bs";

const NavbarTop = () => {
  return (
    <div
      id="header-top"
      className="border-b border-solid border-[#dee2e6] py-2"
    >
      <div className="container">
        <ul className="flex flex-wrap justify-end">
          <li className="pr-3">
            <Link href="#" className="inline-flex items-center gap-1 text-sm">
              support@unizoy.com
              <CiMail />
            </Link>
          </li>
          <li className="font-[50] pr-3">|</li>
          <li className="pr-3">
            <Link href="" className="inline-flex items-center text-sm">
              <BsTelephoneFill className="w-3 h-3 mr-2 -rotate-90 opacity-85" />
              +91 9429232932
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarTop;

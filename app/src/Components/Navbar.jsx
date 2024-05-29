import React from "react";
import logo from "../assets/logo.svg";
import icon_cart from "../assets/icon_cart.svg";
import image_avatar from "../assets/image_avatar.png";

const Navbar = () => {
  return (
    <nav className="mt-[3%]  h-[70px] border-b-4 border-gray-100 ">
      <ul className="flex justify-between">
        <img src={logo} alt="" className="w-[150px] h-[20px] " />
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
        <li className="ml-80">
          <img src={icon_cart} alt="" className="w-[25px]" />
        </li>
        <li>
          <img src={image_avatar} alt="" className="w-[30px]" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

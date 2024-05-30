import React from "react";
import image_product_1 from "../assets/image_product_1.jpg";
import image_product_2 from "../assets/image_product_2.jpg";
import image_product_3 from "../assets/image_product_3.jpg";
import image_product_4 from "../assets/image_product_4.jpg";
import icon_cart from "../assets/icon_cart.svg";

const Hero = () => {
  return (
    <div className="flex justify-center  px-[10%] py-[8%]  gap-[100px]">
      <div className="w-full">
        <img src={image_product_1} alt="" className="rounded-xl w-[400px]" />
        <div className="flex  mt-[5%] gap-[26px]">
          <img
            src={image_product_1}
            alt=""
            className="w-[80px] rounded-xl border-4 border-orange-600 contrast-50"
          />
          <img src={image_product_2} alt="" className="w-[80px] rounded-xl" />
          <img src={image_product_3} alt="" className="w-[80px] rounded-xl" />
          <img src={image_product_4} alt="" className="w-[80px] rounded-xl" />
        </div>
      </div>
      <div className="pt-20 ">
        <h1 className="text-[14px] font-bold text-orange-300">
          SNEAKER COMPANY
        </h1>
        <h2 className="text-[45px] font-bold leading-[45px] py-6">
          Fall Limited Edition
          <br /> Sneakers
        </h2>
        <p className="text-[16px] pb-[10px]">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable outer sole, they'll withstand everything the
          weather can offer.
        </p>
        <span className="text-[24px] font-bold">$125.00</span>
        <span className="ml-[15px] text-[20px] border-none rounded-[4px] px-[5px] bg-orange-200 text-orange-500">
          50%
        </span>
        <p className="mt-[10px] text-gray-400 line-through font-bold text-[15px] pb-[20px]">
          $250.00
        </p>
        <button className="border-none rounded-[8px] bg-orange-400 text-white text-xl px-[50px] py-[10px] inline-flex">
          <img src={icon_cart} alt="" className="w-[17px] pt-[7px] mr-[10px]" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Hero;

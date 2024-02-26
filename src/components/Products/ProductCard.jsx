import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductCard = ({ item, index }) => {
  const { name, desc,Image, bgColor, textColor } = item;
  return (
    <div className="py-[30px] px-3 lg:px-5">
      <div>
        <img className="md:max-w-[180px] md:min-h-[220px]" src={Image} alt="" />
      </div>
      <h2 data-aos="fade-in" data-aos-delay="200" className="text-[22px] leading-9 text-headingColor font-[700]">
        {name}
      </h2>
      <p data-aos="zoom-out-up" data-aos-delay="300" className="text-[16px] leading-7 font-[400] text-textColor text-justify mt-4">
        {desc}
      </p>
      <div className="flex items-center justify-between mt-[30px]">
        <Link data-aos="zoom-in"
          to="/products"
          className="w-[44px] h-[44px] rounded-full 
                border border-solid border-[#181A1E] mt-[30px] mx-auto flex
                 items-center justify-center group hover:bg-secondaryColor hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
        <span className="w-[44px] h-[44px] flex items-center justify-center bg-secondaryColor text-[18px] leading-[30px]
        font-[600]" style={{background:`${bgColor}`, color:`${textColor}`, borderRadius:'6px 0 0 6px'}}>
            {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;

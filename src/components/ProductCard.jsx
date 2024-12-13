import React, { useState } from "react";

const ProductCard = ({ image, title, price, location, daysAgo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="border rounded-lg shadow hover:shadow-lg transition transform hover:border-[#F50963] active:border-[#F50963]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative h-52 bg-cover bg-center rounded-t-lg mb-4"
        style={{ backgroundImage: `url(${image})` }}
      >
        {isHovered && (
          <button
            className="absolute top-5 right-2 bg-[#F50963] text-white px-4 py-2 rounded-full text-xs"
            style={{ zIndex: 10 }}
          >
            EDIT AD
          </button>
        )}
      </div>

      <div className="pt-4 p-4">
        <p className="text-sm mb-4 text-[#666666]">
          {location} <span className="ps-5">•</span> <span className="ps-5">{daysAgo}</span>
        </p>
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-[#F50963] font-bold mt-5 pb-5">{price}</p>

          <img
            src={isHovered ? '/assets/active.svg' : '/assets/deactive-eye.svg'}
            alt="Eye Icon"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

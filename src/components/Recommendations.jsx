import React from "react";
import ProductCard from "./ProductCard";

const recommendations = [
  {
    id: 1,
    image: "/assets/ear.svg",
    title: "Tx9 Pro Smart Tv Box 8/128gb Best Price: Urgent",
    price: "$499",
    location: "Paris",
    daysAgo: "1 day ago",
  },
  {
    id: 2,
    image: "/assets/sofa.svg",
    title: "HP Envy x360 Laptop – Core i7, 16GB RAM, 512GB SSD",
    price: "$499",
    location: "Paris",
    daysAgo: "1 day ago",
  },
  {
    id: 3,
    image: "/assets/cycle.svg",
    title: "Sony 55 4K Smart LED TV –Excellent Picture Quality",
    price: "$499",
    location: "Paris",
    daysAgo: "1 day ago",
  },
  {
    id: 4,
    image: "/assets/cycle.svg",
    title: "Sony 55 4K Smart LED TV –Excellent Picture Quality",
    price: "$499",
    location: "Paris",
    daysAgo: "1 day ago",
  },
  {
    id: 5,
    image: "/assets/lap.png",
    title: "Apple macbook pro 15.6 inch monitor laptop",
    price: "$499",
    location: "Paris",
    daysAgo: "1 day ago",
  },
  {
    id: 6,
    image: "/assets/camera.svg",
    title: "Panasonic Split Air Conditioner – 1.5 Ton, Inverter Technology",
    price: "$499",
    location: "Paris",
    daysAgo: "1 day ago",
  },
  {
    id: 7,
    image: "/assets/cycle2.svg",
    title: "Whirlpool Front Load Washing Machine – 7kg Capacity",
    price: "$499",
    location: "Paris",
    daysAgo: "1 day ago",
  },
];

const Recommendations = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 lg:px-10 py-28">
      <div className="flex flex-col justify-center items-center mb-6">
        <p className="tracking-widest text-[#F50963] pb-3">What’s new</p>
        <h2 className="text-2xl lg:text-4xl font-semibold mb-6">Fresh Recommendations</h2>
      </div>

      <div className="w-full flex justify-between items-center mb-6 px-4 lg:px-36">
        <p className="text-[#F50963] font-semibold text-lg">
          33 <span className="text-[#212121]">Items</span>
        </p>
        <div className="flex gap-2">
          <img src='/assets/Tab.svg' alt="Tab Icon" className="cursor-pointer transition" />
          <img src='/assets/Tab2.svg' alt="Tab Icon" className="cursor-pointer transition" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-4 lg:px-36">
        {recommendations.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </section>



  );
};

export default Recommendations;
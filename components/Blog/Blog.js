"use client";

import React, { useState } from "react";
import Image from "next/image";
import SoloBlog from "./SoloBlog";

export default function Blog({ items = [] }) { // default empty array
  const [showSoloBlog, setShowSoloBlog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // اگه بخوای بعداً SoloBlog رو با دیتا نشون بدی
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowSoloBlog(true);
  };

  const handleBack = () => {
    setShowSoloBlog(false);
    setSelectedItem(null);
  };

  if (showSoloBlog) {
    return <SoloBlog item={selectedItem} onBack={handleBack} />;
  }

  return (
    <div className="container mx-auto px-5 mb-50 lg:p-28">
      <div className="my-5">
        <div data-aos="fade-up">
          <p className="text-redBody lg:text-lg font-bold text-center" id="blog-section">
            Visit my blog and keep your feedback
          </p>
          <h1 className="mt-5 mb-20 text-4xl lg:text-7xl font-black text-center">My Blog</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {items.map((item) => (
            <div
              key={item.id} // استفاده از id به جای index
              className="transition duration-700 ease-in-out rounded-3xl btn-h bg-bgray btn-color p-10 cursor-pointer"
              onClick={() => handleItemClick(item)}
            >
              <div className="overflow-hidden rounded-2xl transition duration-500">
                <Image
                  src={item.image || "https://fakeimg.pl/600x400/333/fff/?text=Blog&font=bebas"}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover rounded-2xl hover:scale-110 transition duration-500"
                />
              </div>

              <div className="flex justify-between my-6 text-sm">
                <span className="text-redBody font-bold">{item.writer || "Shahriar H"}</span>
                <span>{item.time_to_read || "5"} min read</span>
              </div>

              <h3 className="text-2xl font-bold leading-tight hover:text-redBody transition">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600">{item.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
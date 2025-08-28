"use client";
import Image from "next/image";
import { useState } from "react";

const categories = [
  { id: 1, name: "Phones", iconSrc: "/images/phone.jpg" },
  { id: 2, name: "Computers", iconSrc: "/images/desktop.png" },
  { id: 3, name: "SmartWatch", iconSrc: "/images/smartwatch.png" },
  { id: 4, name: "Camera", iconSrc: "/images/camela.png" },
  { id: 5, name: "HeadPhones", iconSrc: "/images/headsets.jpg" },
  { id: 6, name: "Gaming", iconSrc: "/images/gamepad.jpg" },
];
export default function BestSells() {
  const [activeCategory, setActiveCategory] = useState(4);
  return (
    <section className="max-w-9xl p-36">
      <div className="mb-14 ">
        <span className="text-red-600 text-sm font-semibold">Categories</span>
        <h2 className="text-2xl font-bold mt-2">Browse By Category</h2>
      </div>
      <div className="flex space-x-14 items-center">
        {categories.map(({ id, name, iconSrc }) => (
          <button
            key={id}
            onClick={() => setActiveCategory(id)}
            className={`flex flex-col items-center pr-18 border rounded-md px-16 py-8 transition ${
              activeCategory === id
                ? "bg-red-600 border-red-300 text-white"
                : "border-gray-500 text-black"
            }`}>
            <Image src={iconSrc} alt={name} width={32} height={32} className={'mb-16 ml-8 '}/>
            <span className="text-xs pr-6">{name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
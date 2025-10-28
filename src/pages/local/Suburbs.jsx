"use client";
import { Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Suburbs({suburbs = [],removalist="",city="",}) {
  const list = [
    "Moving from Brisbane to Bundaberg",
    "Moving from Brisbane to Cairns",
    "Moving from Brisbane to Gladstone",
    "Moving from Brisbane to Gold Coast",
    "Moving from Brisbane to Hervey Bay",
    "Moving from Brisbane to Mackay",
    "Moving from Brisbane to Maryborough",
    "Moving from Brisbane to Rockhampton",
    "Moving from Brisbane to Sunshine Coast",
    "Moving from Brisbane to Toowoomba",
    "Moving from Brisbane to Townsville",
  ];
  const list2 = [
    "Moving from Bundaberg to Brisbane",
    "Moving from Cairns to Brisbane",
    "Moving from Gladstone to Brisbane",
    "Moving from Mackay to Brisbane",
    "Moving from Maryborough to Brisbane",
    "Moving from Rockhampton to Brisbane",
    "Moving from Toowoomba to Brisbane",
    "Moving from Townsville to Brisbane",
  ];
  const cat = ["From Brisbane", "To Brisbane"];
  const [isSelected, setIsSelected] = useState(0);

  // let selectedList = isSelected === 0 ? list : list2;
const firstWord = city.split("-")[0];

  return (
    <section className="spy80px bg-accent-4">
      <main className="container">
        <h3 className="h2 text-center font-semibold capitalize">
        { ` Find Professional Removalists in ${firstWord}’s Suburbs`}
        </h3>
        {/* <p className="h6 mt-4 text-center text-black-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
          beatae. Unde temporibus porro illo nostrum!
        </p> */}

        {/* <div className="mx-auto mt-6 flex w-full max-w-4xl justify-center gap-12 ">
          {cat.map((item, id) => {
            const isActive = isSelected === id;
            return (
              <span
                key={id}
                onClick={() => {
                  setIsSelected(id);
                }}
                className={` relative
          w-full cursor-pointer  text-center text-gray-700 transition-colors duration-200
          before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0
          before:bg-prim before:transition-all before:duration-300
          before:content-[''] hover:before:w-full
          ${isActive ? "font-semibold text-[var(--primary-hex)] before:w-full" : "hover:text-[var(--primary-hex)]"}
        `}
              >
                {item}
              </span>
            );
          })}
        </div> */}

        <div
          className="
            mx-auto 
            mt-8 
            grid 
            w-full
            max-w-6xl 
            place-items-center
            justify-center
            gap-8 
            sm:grid-cols-2 
            lg:grid-cols-5
        
          "
        >
          {suburbs?.map((item, idx) => (
            <Link key={idx} href={`/${removalist}/${city}/${item.slug}`} >
            <span
              key={idx}
              className="
                w-full 
                rounded-full
                bg-white-1 
                px-4 
                py-2 
                text-center 
                text-sm 
                tracking-wider 
                text-black-2 
                shadow-md
                transition-colors
                duration-200
               hover:bg-white-3/30
               flex 
               items-center 
               justify-center 
               gap-2
               group
              
              "
            >
              <span className=" bg-black-3 text-white-1  p-[.10rem] rounded-full " ><Check className=" size-4 " /></span>
              {item.title}
            </span>
            
            </Link>
          ))}
        </div>
      </main>
    </section>
  );
}

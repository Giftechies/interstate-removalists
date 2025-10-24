"use client";
import { useState } from "react";

export default function Sababs() {
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
  "Moving from Townsville to Brisbane"
]
  const cat = ["From Brisbane", "To Brisbane"];
const [isSelected,setIsSelected]= useState(0)

 let selectedList = isSelected ===0 ? list : list2;
  return (
    <section className="spy80px bg-accent-4">
      <main className="container">
        <h3 className="h2 font-semibold title-animation text-center">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
        <p className="h6 text-black-3 mt-4 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, beatae. Unde temporibus porro illo nostrum!
        </p>


    <div className="flex justify-center gap-12 w-full max-w-4xl mt-6 mx-auto ">
  {cat.map((item, id) => {
    const isActive = isSelected === id;
    return (
      <span
        key={id}
        onClick={() =>{setIsSelected(id)}

        }
        className={` w-full
          relative cursor-pointer  text-center text-gray-700 transition-colors duration-200
          before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px]
          before:bg-primary before:transition-all before:duration-300
          before:w-0 hover:before:w-full
          ${isActive ? "before:w-full text-primary font-semibold" : "hover:text-primary"}
        `}
      >
        {item}
      </span>
    );
  })}
</div>


        <div
          className="
            grid 
            sm:grid-cols-2 
            lg:grid-cols-4 
            gap-4
            justify-center 
            place-items-center
            mt-8
            mx-auto 
            w-full 
            max-w-6xl
        
          "
        >
          {selectedList.map((item, idx) => (
            <span
              key={idx}
              className="
                bg-white-1 
                text-black-2
                px-4 
                py-2 
                rounded-lg 
                text-center 
               
                hover:bg-white-3/30 
                transition-colors 
                duration-200 
                w-full
                sm:w-[90%]
                md:w-[80%]
               text-sm
               tracking-wider
               shadow-md
              "
            >

              {item}
            </span>
          ))}
        </div>
      </main>
    </section>
  );
}

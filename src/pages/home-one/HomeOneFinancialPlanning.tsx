"use client";
import image1 from "@/../public/images/home-one/finance-planning-1.png";
import image2 from "@/../public/images/home-one/finance-planning-2.png";
import image3 from "@/../public/images/home-one/finance-planning-3.png";
import image4 from "@/../public/images/home-one/finance-planning-4.png";
import LInkArrow from "@/components/link/LInkArrow";
import Lines from "@/components/shared/Lines";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import { useState } from "react";
import HomeOneFinancialCard from "./HomeOneFinancialCard";



const HomeOneFinancialPlanning = ({cardData= [
  { 
    image:image1,
    link:"#",

    cardTitle: "Local Removalists",
    cardText:
      "Local move? Too easy. Your furniture’s wrapped, loaded, and dropped off at your new residence. Expect a reliable move to be done on time.",
  },
  {
     image:image2,
    link:"#",
    cardTitle: "Interstate Removalists",
    cardText:
      "Moving across states? Your stuff’s loaded, tracked, and delivered anywhere in Oz — no mucking about, no hold-ups, just an easy move",
  },
  { image:image1,
    link:"#",
    cardTitle: "Dining Table Removalists",
    cardText:
      "Your dining table is carefully wrapped and moved to your new home, scratch-free, ready to sit around for your next meal.",
  },
  { image:image1,
    link:"#",
    cardTitle: "Pool Table Removalists",
    cardText:
      "Moving a pool table? It’s carefully pulled apart, padded, shifted, and levelled again perfectly, so it’s game-ready straight away.",
  },
  
]}) => {
  const [isHover, setIsHover] = useState(0);

  const handleHover = (index: number) => {
    setIsHover(index);
  };

  return (
    <section className="spt120px spb120px  bg-zinc-100 fade-wrapper relative overflow-hidden">
      <div className="container">
        {/* section header */}
        <div className="grid-cols-1 xl:grid-cols-12 justify-between items-center">
          <div className=" col-span-1  xl:col-span-9 ">
            <SectionSubTitle text="Our Services " />
           
            <span className=" d4 mt-3  font-semibold capitalize " >Every move, one platform.</span>
            <p className="m-text text-black-3 lg:w-[60%] mt-3 " > Browse trusted movers for any service, compare prices, and lock in your removalists online in just a few clicks.</p>
          </div>
          <div className=" col-span-1 xl:col-span-10 flex  justify-end items-end ">
            <LInkArrow
              linkText="KNOW MORE"
              link="/pick-details"
              className="max-md:order-2 md:place-content-end"
              roundClassName="max-md:size-10"
            />
           
          </div>
        </div>
        {/* section body */}
        <div className="spt60px grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cardData.map((data, index) => (
            <HomeOneFinancialCard
              key={index}
              {...data}
              handleHover={handleHover}
              isHover={isHover}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeOneFinancialPlanning;

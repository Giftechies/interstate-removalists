"use client";
import image1 from "@/../public/images/home-one/finance-planning-1.png";
import image2 from "@/../public/images/home-one/finance-planning-2.png";

import LInkArrow from "@/components/link/LInkArrow";

import SectionSubTitle from "@/components/shared/SectionSubTitle";

import { useState } from "react";
import ServiceCard from "@/pages/service/ServiceCard"




const HomeOneFinancialPlanning = ({ data=[] }) => {
  const [isHover, setIsHover] = useState(0);
  console.log(" in card data>>>>>>>>>>>>>>>>>>>>",data);
  

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
          {data.map((item, index) => {  
              const {
    image = null,
    description = "Nothing",
    title = "",
    slug = "",
  } = item;
            return(

              <ServiceCard
              key={index}
      handleHover={handleHover}
      isHover={isHover}
      index={index}
      image={image}
      description={description}
      title={title}
      slug={slug}
              />
            )
})}
        </div>
      </div>
    </section>
  );
};

export default HomeOneFinancialPlanning;

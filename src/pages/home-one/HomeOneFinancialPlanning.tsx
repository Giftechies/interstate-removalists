"use client";

import LInkArrow from "@/components/link/LInkArrow";

import SectionSubTitle from "@/components/shared/SectionSubTitle";

import { useState } from "react";
import ServiceCard from "@/pages/service/ServiceCard";
import SectionTitle from "@/components/shared/SectionTitle";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";

const HomeOneFinancialPlanning = ({ data = [],className='spt120px ', show=true }) => {
  const [isHover, setIsHover] = useState(0);
  const handleHover = (index: number) => {
    setIsHover(index);
  };

  console.log("data in financial planning",data);
  

  return (
    <section className={cn(`spb120px  fade-wrapper relative overflow-hidden bg-zinc-100 ${show?"":""} `,className)}>
      <div className="container">
        {/* section header */}
     {show &&    <div className=" grid grid-cols-1 items-center justify-between xl:grid-cols-12  ">
          <div className=" col-span-1  xl:col-span-6  ">
            <SectionSubTitle text="Our Services " />
            <SectionTitle text="Every move, one platform." />
          
          </div>
          <div className=" col-span-1  xl:col-span-6  ">
              <p className="m-text mt-3 text-black-3 ">
              Browse trusted movers for any service, compare prices, and lock in
              your removalists online in just a few clicks.
            </p>
            <LInkArrow
              linkText="KNOW MORE"
              link="/services"
              className="max-md:order-2 md:place-content-end"
              roundClassName="max-md:size-10"
            />
          </div>
        </div>}
        {/* section body */}
        <div className={ ` ${show?"spt60px":""}  grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4`}>
          {data?.map((item, index) => {
            const {
              image = null,
              description = "Nothing",
              title = "",
              slug = "",
            } = item;
            return (
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeOneFinancialPlanning;

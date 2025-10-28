"use client";

import LInkArrow from "@/components/link/LInkArrow";

import SectionSubTitle from "@/components/shared/SectionSubTitle";

import { useState } from "react";
import ServiceCard from "@/pages/service/ServiceCard";

const HomeOneFinancialPlanning = ({ data = [] }) => {
  const [isHover, setIsHover] = useState(0);
  const handleHover = (index: number) => {
    setIsHover(index);
  };

  return (
    <section className="spt120px spb120px  fade-wrapper relative overflow-hidden bg-zinc-100">
      <div className="container">
        {/* section header */}
        <div className="grid-cols-1 items-center justify-between xl:grid-cols-12">
          <div className=" col-span-1  xl:col-span-9 ">
            <SectionSubTitle text="Our Services " />

            <span className=" d4 mt-3  font-semibold capitalize ">
              Every move, one platform.
            </span>
            <p className="m-text mt-3 text-black-3 lg:w-[60%] ">
              {" "}
              Browse trusted movers for any service, compare prices, and lock in
              your removalists online in just a few clicks.
            </p>
          </div>
          <div className=" col-span-1 flex items-end  justify-end xl:col-span-10 ">
            <LInkArrow
              linkText="KNOW MORE"
              link="/services"
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

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
const cardData = [
  { 
    image:image1,
    link:"#",

    cardTitle: "Expert removalists",
    cardText:
      "A removalist truck and two men (depending on the size of your move) will come to collect and deliver your items.",
  },
  {
     image:image2,
    link:"#",
    cardTitle: "Online booking",
    cardText:
      "Save time calling other removalists for quotes. Find, compare and book your removalist online.",
  },
  { image:image1,
    link:"#",
    cardTitle: "Dedicated service",
    cardText:
      "Our experienced customer service team is available to assist you at every step of your move.",
  },
  { image:image1,
    link:"#",
    cardTitle: "Protective covering",
    cardText:
      "Your items will be protected with heavy blankets using moving industry best practices. These help prevent your items from damage.",
  },
  { image:image1,
    link:"#",
    cardTitle: "Loading & unloading",
    cardText:
      "Full service loading and unloading of the removal truck is included with every move. Packing services are available at extra cost.",
  },
  { image:image1,
    link:"#",
    cardTitle: "Complimentary cover*",
    cardText:
      "Receive $5,000 of complimentary cover on named items for added peace of mind. *Only available for MuveXpress bookings.*",
  },
];


const HomeOneFinancialPlanning = () => {
  const [isHover, setIsHover] = useState(0);

  const handleHover = (index: number) => {
    setIsHover(index);
  };

  return (
    <section className="spt120px spb120px fade-wrapper relative overflow-hidden">
      <div className="container">
        {/* section header */}
        <div className="grid grid-cols-12 justify-between items-center">
          <div className=" col-start-1 col-end-9 ">
            <SectionSubTitle text="THINKING TO MOVE" />
            <SectionTitle
              text="What's included when you book a removalist with Muval?"
              className="pt-3"
            />
          </div>
          <div className="col-start-10 flex  justify-end items-end ">
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

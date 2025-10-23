"use client";
import faqCoin from "@/../public/images/home-one/faq-coin.png";
import faqDonate from "@/../public/images/home-one/faq-donat.png";
import faqImage from "@/../public/images/home-one/faq-image.png";
import Lines from "@/components/shared/Lines";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";
import { useState } from "react";
import SingleFaq from "./SingleFaq";

export const faqData = [
  {
    question: "How much do removalists cost?",
    answer:
      "Moving costs vary depending on your location, the stuff you’re moving, and the type of service you choose. With Interstate Removalists, you can compare different movers and prices side by side to find the best fit for your move and budget.",
  },
  {
    question: "How long will it take for the movers to arrive or finish the job?",
    answer:
      "Once your booking’s confirmed, we’ll share your mover’s schedule and arrival window. Most local moves are wrapped up within a few hours. Larger or interstate jobs can take longer, but you’ll stay updated the whole way through.",
  },
  {
    question: "Are my belongings insured during the move?",
    answer:
      "Yes. Every mover in our network carries proper cover for transit and handling. You can add extra protection for long-haul or high-value moves. From loading to delivery, your belongings are looked after properly.",
  },
  {
    question: "How early should I book my move?",
    answer:
      "It’s best to book at least a week or two ahead, especially if you’re moving on a weekend or at the end of the month. Early bookings mean better choices, better rates, and zero last-minute stress.",
  },
  {
    question: "Do you offer packing and unpacking services?",
    answer:
      "We sure do. Many movers on our platform can handle full packing and unpacking, so you don’t have to lift a thing. Just fill in the details when booking — easy as that.",
  },
  {
    question: "How long does a move usually take?",
    answer:
      "A small local move can take three to four hours. Interstate trips take longer depending on access and distance. Your mover will give you a solid time estimate upfront, so you know what to expect.",
  },
  {
    question: "Do you move large or specialty items, like pianos, pool tables, or antiques?",
    answer:
      "Yep. Our movers handle heavy and delicate pieces all the time. They’ve got the right gear and know-how to shift anything safely — from pianos and wardrobes to pool tables, dining tables, and antique furniture. Everything’s wrapped, lifted, and moved with proper care.",
  },
  {
    question: "What makes Interstate Removalist different from others?",
    answer:
      "We’ve built a network of movers who get that it’s not just stuff — it’s your home. They’re steady on the job, careful with every piece, and keep things running smoothly so your move feels easy, not chaotic.",
  },
];


const HomeOneFaq = () => {
  const [dropDown, setDropDown] = useState("");
  return (
    <div className="spy120px relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-12 items-center justify-between gap-6">
          <div className="col-start-1 max-lg:col-end-13 lg:col-end-8 xl:col-end-7">
            <SectionSubTitle text="FAQ" />
            <SectionTitle text="Frequently ASked Questions" />
            <div className="spt60px">
              <div className="flex flex-col justify-between gap-8">
                {faqData?.map(({ question, answer }, index) => (
                  <SingleFaq
                    key={`faq-${question}`}
                    id={`faq-${index}`}
                    question={question}
                    answer={answer}
                    dropDown={dropDown}
                    setDropDown={setDropDown}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-start-1 col-end-13 lg:col-start-8 xl:col-start-9">
            <Image
              src={faqImage}
              width={457}
              height={476}
              alt="faq image"
              className="max-lg:mx-auto max-lg:block"
            />
          </div>
        </div>
      </div>
      <Lines />
      <Image
        src={faqDonate}
        width={219}
        height={200}
        alt="faq donate"
        className="absolute right-5 top-5 max-lg:size-20 animate-spin-slow sm:right-20 sm:top-16 lg:max-4xl:size-40 shrink-0 4xl:right-[132px] 4xl:top-[74px]"
      />
      <Image
        src={faqCoin}
        width={229}
        height={193}
        alt="faq coin"
        className="absolute bottom-[87px] left-0 hidden 4xl:block"
      />
    </div>
  );
};

export default HomeOneFaq;

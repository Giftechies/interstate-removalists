"use client";
import moneyTransfer from "@/../public/images/money-transfer.png";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import Counter from "@/components/shared/scroll-top/Counter";
import {
  IconArrowUpRight,
  IconLogout,
  IconShieldCheck,
  IconCalendarCheck,
  IconPackageExport
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BannerVideoButton from "./BannerVideoButton";
import VideoModal from "./VideoModal";

const HowItrWorksContent = () => {
  const [isOpen, setOpen] = useState(false);

  const handleDropdown = () => {
    setOpen((prev) => !prev);
  };

  const steps = [
    {title: "Get a Qoute", description: "Start by contacting us for a free, personalized quote. Share your moving details.", Icon:IconLogout },
    {title: "Plan your move", description: "Once signed up, you will need to verify your account.", Icon:IconCalendarCheck},
    {title: "safe & secure moving", description: "Our expert movers handle your belongings with care, using high-quality packing materials.", Icon:IconShieldCheck},
    {title: "unpack & settle in", description: "Once we've delivered your items, we'll help with unpacking and setting up, so you can enjoy.", Icon:IconPackageExport},
      
  ]

  return (
    <section className="spy120px fade-wrapper" id="scrollPosition">
      <div className="container">
        <div className="grid grid-cols-12 items-center gap-6 sm:gap-x-6 sm:max-xl:gap-y-10">
          <div className="col-start-1 col-end-13 sm:col-end-8 xl:col-end-6">
            <span className="h5 font-medium text-black-3">
              How we work
            </span>
            <SectionTitle
              text="simple and straightforward process"
              className="mt-3"
            />
          </div>
          <div className="col-start-1 col-end-5 xl:col-start-6 xl:col-end-9">
            <div className="relative size-32 rounded-full bg-accent-3/20 sm:size-40 lg:size-[196px]">
              <div className="absolute left-[35%] flex size-32 flex-col items-center justify-center rounded-full bg-accent-3 sm:size-40 lg:size-[196px]">
                <div className="h1 font-bold">
                  <Counter value={24} />
                </div>
                <p className="h4 font-medium">Years</p>
              </div>
            </div>
          </div>
          <div className="col-start-1 col-end-13 sm:col-start-6 xl:col-start-9">
            <SectionText
              text="We aim to provide you with a transparent and straightforward understanding of our investment process. We follow a simple three-step approach to ensure your investment journey is smooth and hassle-free."
              className="fade-top"
            />
            <Link
              href={``}
              className="h5 smt40px group theme-transition-3 flex items-center gap-2 font-medium hover:text-primary"
            >
              Read More{" "}
              <IconArrowUpRight className="theme-transition-3 group-hover:rotate-45" />
            </Link>
          </div>
        </div>
        <div className="spt60px grid grid-cols-12 gap-6">
          <div className="spt60px spl60px spb60px relative col-start-1 col-end-13 bg-primary text-white-1 xl:col-end-9">
            <SectionTitle text="How it Works" className="h1 font-bold" />
            <div className="smt40px">
            {steps.map((step, index) => {
              return(
                  <div key={index} className="spl40px spb32px relative flex max-w-[370px] gap-4 border-l-4 before:absolute before:-left-3 before:top-0 before:size-5 before:rounded-full before:bg-white-1">
                <step.Icon stroke={1} className="size6 shrink-0 sm:size-12" />{" "}
                <div>
                  <h5 className="h4 title-animation font-medium">
                    {step.title}
                  </h5>
                  <p className="s-text fade-top mt-2">
                   {step.description}
                  </p>
                </div>
              </div>
              )
            })
            }
            </div>
            {/* <BannerVideoButton handleDropdown={handleDropdown} /> */}
            <Image
              src={moneyTransfer}
              width={320}
              height={257}
              alt="Money Transfer"
              className="absolute bottom-0 right-0 max-lg:w-40 max-sm:hidden"
            />
          </div>
          <div className=" col-start-1 col-end-13  gap-8  text-center flex flex-col justify-between md:max-xl:flex-none items-center xl:col-start-9">
            <div className="spt40px border-2 border-black-3/60 h-[50%] w-full flex flex-col itec justify-center spb40px mx-auto   ">
              <h5 className="h3 title-animation font-medium">10x Profits</h5>
              <SectionText
                text="Experience the power of exponential growth with our exclusive 10x Profits feature. Through our innovative investment strategies and market expertise."
                className="mt-6"
              />
            </div>
            {/* <div className="10x Profits bg-black-3/60 max-md:h-0.5 max-md:w-full md:h-full md:w-0.5 xl:h-0.5 xl:w-full"></div> */}
            <div className=" h-[50%]  w-full object-cover object-right bg-prim ">
<img src="https://plus.unsplash.com/premium_photo-1661409351559-4172ea985076?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdmVyc3xlbnwwfHwwfHx8MA%3D%3D" className=" size-full object-cover object-right " alt="" />
            </div>
          </div>
        </div>
      </div>
      <VideoModal isOpen={isOpen} setOpen={setOpen} videoId="4DCTTrGjGU4" />
    </section>
  );
};

export default HowItrWorksContent;

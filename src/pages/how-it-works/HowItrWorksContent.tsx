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
  IconPackageExport,
  IconPhoneCall,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BannerVideoButton from "./BannerVideoButton";
import VideoModal from "./VideoModal";
import LinkAccentThree from "@/components/link/LinkAccentThree";

const HowItrWorksContent = () => {
  const [isOpen, setOpen] = useState(false);

  const handleDropdown = () => {
    setOpen((prev) => !prev);
  };

  const steps = [
    {
      title: "Tell Us What You’re Moving",
      description:
        "Pop in your pickup and drop-off details, and let us know what needs shifting. We’ll line up removalists who are right for your move.",
      Icon: IconLogout,
    },
    {
      title: " Compare and Choose",
      description: "You’ll get a few clear quotes from trusted movers near you. Check what’s included, compare prices, and pick the one that fits your plan.",
      Icon: IconCalendarCheck,
    },
    {
      title: " Book and Relax",
      description:
        "Once you book, your mover takes over. They’ll confirm times, handle the loading, and keep you in the loop along the way.",
      Icon: IconShieldCheck,
    },
    {
      title: "Delivery Done Properly",
      description:
        "Every item arrives safely at your new place. The team unloads, puts things where you need them, and checks you’re happy before they roll out.",
      Icon: IconPackageExport,
    },
  ];

  return (
    <section className="spy120px fade-wrapper" id="scrollPosition">
      <div className="container">
        <div className="grid grid-cols-12 items-center space-y-4 ">
          <div className="col-start-1 col-end-13 lg:col-end-6 xl:col-end-6 space-y-4 ">
            <span className="h5 font-medium text-primary">Our Process</span>
            <SectionTitle text="How We Work" className="" />
          </div>
          <div className="col-start-1 col-end-13 lg:col-start-6  ">
            <SectionText
              text="Need dependable local or interstate removalists in Australia? Here’s how the whole process works from start to finish."
              className="fade-top"
            />
        
          </div>
        </div>
        <div className="spt60px grid grid-cols-12 gap-6">
          <div className="spt60px spl60px spb60px relative  col-start-1 col-end-13 bg-secondary text-white-1 xl:col-end-9">
            <div className="smt40px  grid grid-cols-12">
              <div className="  col-start-2 lg:col-start-1 col-end-12 relative  ">
                {steps.map((step, index) => {
                  return (
                    <div
                      key={index}
                      className=" spl60px lg:spl40px spb60px relative flex max-w-[500px]  gap-4 border-l-4    "
                    >
                      <div className=" h6 fade-top absolute -left-[23px] top-0  flex size-10 items-center   justify-center rounded-full border border-white-1 bg-secondary font-semibold  text-white-1 ">
                        {index + 1}
                      </div>
                      <step.Icon
                        stroke={1}
                        className="size6 shrink-0 sm:size-12"
                      />{" "}
                      <div>
                        <h5 className="h4 font-light title-animation  ">
                          {step.title}
                        </h5>
                        <p className="s-text tracking-wider fade-top mt-2">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}

                <div className=" max-lg:hidden absolute animate-spin-slow text-primary -top-4 -right-12 ">
                  <svg viewBox="0 0 200 200" width="200" height="200">
                    <defs>
                      <path
                        id="circlePath"
                        d="M100,100
         m-75,0
         a75,75 0 1,1 150,0
         a75,75 0 1,1 -150,0"
                      />
                    </defs>

                    <text fill="white" fontSize="24" fontWeight="400">
                      <textPath href="#circlePath" startOffset="0" className="  capitalize " >
                        • Interstate removalists • interstate removalists •
                        interstate removalists
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            {/* <BannerVideoButton handleDropdown={handleDropdown} /> */}
            {/* <Image
              src={moneyTransfer}
              width={320}
              height={257}
              alt="Money Transfer"
              className="absolute bottom-0 right-0 max-lg:w-40 max-sm:hidden"
            /> */}
          </div>
          <div className="  border col-start-1 col-end-13   flex max-md:flex-col xl:flex-col  items-center justify-between gap-8 text-center  xl:col-start-9">
            {/* <div className="spt40px itec spb40px mx-auto flex h-[50%] w-full flex-col justify-center border-2 border-black-3/60   ">
              <h5 className="h3 title-animation font-medium">10x Profits</h5>
              <SectionText
                text="Experience the power of exponential growth with our exclusive 10x Profits feature. Through our innovative investment strategies and market expertise."
                className="mt-6"
              />
            </div> */}

            {/* contact section */}
            <div className="flex till-card flex-col items-center rounded-xl shadow-md bg-primary w-full text-white-1 px-6 py-10 text-center ">
              <div className="sp24px mx-auto w-fit rounded-full bg-white-1 p-4 text-black-4">
                <IconPhoneCall className="size-8" />

              </div>
              <h6 className="h4 mt-5 font-medium  "></h6>Contact us for a free quote
              <p className="l-text mt- mt-5 ">
                Do you want to move hessle free? contact us
              </p>
              <LinkAccentThree link="/contact" linkText="Call Know" className="smt32px text-black-4 bg-white-1 " />
            </div>

            {/* contact section end */}
            {/* <div className="10x Profits bg-black-3/60 max-md:h-0.5 max-md:w-full md:h-full md:w-0.5 xl:h-0.5 xl:w-full"></div> */}
            <div className=" bg-prim h-full w-full object-cover object-right ">
              <img
                src="https://plus.unsplash.com/premium_photo-1661409351559-4172ea985076?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdmVyc3xlbnwwfHwwfHx8MA%3D%3D"
                className=" size-full object-cover object-right "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* <VideoModal isOpen={isOpen} setOpen={setOpen} videoId="4DCTTrGjGU4" /> */}
    </section>
  );
};

export default HowItrWorksContent;

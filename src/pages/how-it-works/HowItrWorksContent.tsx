"use client";
import moneyTransfer from "@/../public/images/money-transfer.png";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import Counter from "@/components/shared/scroll-top/Counter";
import {
  IconArrowUpRight,
  IconBuildingBank,
  IconLogout,
  IconShieldCheck,
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

  return (
    <section className="spy120px fade-wrapper" id="scrollPosition">
      <div className="container">
        <div className="grid grid-cols-12 items-center gap-6 sm:gap-x-6 sm:max-xl:gap-y-10">
          <div className="col-start-1 col-end-13 sm:col-end-8 xl:col-end-6">
            <span className="h5 font-medium text-black-3">
              Simplify Your Finances
            </span>
            <SectionTitle
              text="How Does Money Transfer Work?"
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
              <div className="spl40px spb32px relative flex max-w-[370px] gap-4 border-l-4 before:absolute before:-left-3 before:top-0 before:size-5 before:rounded-full before:bg-white-1">
                <IconLogout stroke={1} className="size6 shrink-0 sm:size-12" />{" "}
                <div>
                  <h5 className="h4 title-animation font-medium">
                    Create a free account
                  </h5>
                  <p className="s-text fade-top mt-2">
                    Begin by signing up for an account on our platform.
                  </p>
                </div>
              </div>
              <div className="spb32px spl40px relative flex max-w-[370px] gap-4 border-l-4 before:absolute before:-left-3 before:top-0 before:size-5 before:rounded-full before:bg-white-1">
                <IconShieldCheck
                  stroke={1}
                  className="size6 shrink-0 sm:size-12"
                />{" "}
                <div>
                  <h5 className="h4 title-animation font-medium">
                    Send your funds
                  </h5>
                  <p className="s-text fade-top mt-2">
                    Once signed up, you will need to verify your account.
                  </p>
                </div>
              </div>
              <div className="spl40px relative flex max-w-[370px] gap-4 border-l-4 before:absolute before:-left-3 before:top-0 before:size-5 before:rounded-full before:bg-white-1">
                <IconBuildingBank
                  stroke={1}
                  className="size6 shrink-0 sm:size-12"
                />{" "}
                <div>
                  <h5 className="h4 title-animation font-medium">
                    Track your transfer
                  </h5>
                  <p className="s-text fade-top mt-2">
                    Select the investment plan you wish to proceed with and
                    specify the amount you want to invest.
                  </p>
                </div>
              </div>
            </div>
            <BannerVideoButton handleDropdown={handleDropdown} />
            <Image
              src={moneyTransfer}
              width={320}
              height={257}
              alt="Money Transfer"
              className="absolute bottom-0 right-0 max-lg:w-40 max-sm:hidden"
            />
          </div>
          <div className="xl:spt40px xl:spb40px col-start-1 col-end-13 border-2 border-black-3/60 text-center md:max-xl:flex xl:col-start-9">
            <div className="max-xl:spt40px max-xl:spb40px mx-auto max-w-[334px]">
              <h5 className="h3 title-animation font-medium">10x Profits</h5>
              <SectionText
                text="Experience the power of exponential growth with our exclusive 10x Profits feature. Through our innovative investment strategies and market expertise."
                className="mt-6"
              />
            </div>
            <div className="xl:smt60px xl:smb60px bg-black-3/60 max-md:h-0.5 max-md:w-full md:h-full md:w-0.5 xl:h-0.5 xl:w-full"></div>
            <div className="max-xl:spt40px max-xl:spb40px mx-auto max-w-[334px]">
              <h5 className="h3 title-animation font-medium">
                100% Capital Protection
              </h5>
              <SectionText
                text="Rest easy knowing that your investments are 100% protected with our exclusive Capital Protection guarantee."
                className="fade-top mt-6"
              />
            </div>
          </div>
        </div>
      </div>
      <VideoModal isOpen={isOpen} setOpen={setOpen} videoId="4DCTTrGjGU4" />
    </section>
  );
};

export default HowItrWorksContent;

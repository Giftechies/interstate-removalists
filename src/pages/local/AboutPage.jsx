import image1 from "@/../public/images/need-loan-1.png";
import image2 from "@/../public/images/need-loan-2.png";
import RoundedLink from "@/components/link/RoundedLink";
import ReactCounterUp from "@/components/shared/Counter";
import Lines from "@/components/shared/Lines";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import Counter from "@/components/shared/scroll-top/Counter";
import { IconCheckbox } from "@tabler/icons-react";
import Image from "next/image";

const AboutLocal = () => {
  return (
    <section
      className="spt80px fade-wrapper spb120px relative overflow-hidden"
      id="scrollPosition"
    >
      <div className="container grid grid-cols-12 items-center gap-6">
        <div className="relative  col-start-1 col-end-13 grid grid-cols-1 items-center gap-6 md:grid-cols-2 xl:col-end-7 xl:grid-cols-6 xl:items-end">
          <div className="xl:col-start-1 xl:col-end-5">
            <Image
              src={"/img/innerimg/localimg.png"}
              width={416}
              height={444}
              alt="Mission image one"
              className="appear-down max-sm:mx-auto"
            />
          </div>
          <div className="xl:col-start-5 xl:col-end-7">
            <Image
              src={'https://media.istockphoto.com/id/487175846/photo/delivery-man-unloading-truck.webp?a=1&b=1&s=612x612&w=0&k=20&c=OkcEhNbpV0w9JPTgNqCkJ_IZx5fXnqktOdbOsffF3Es='}
              width={330}
              height={348}
              alt="Mission image two"
              className="appear-down xl:-ms-25  h-[350px] object-cover xl:max-w-[unset] "
            />
            <div className="d3 font-semibold text-primary">
              <Counter value={80} />+
            </div>
            <p className="xl-text text-black-1">Family choose us</p>
          </div>
        </div>
        <div className="col-start-1 col-end-13 xl:col-start-8">
          <SectionTitle
            text="what is Local Move?"
            className="h3 pt-3"
          />
          <SectionText
            className="fade-top pt-5"
            text="A local move is all about relocating within the same city or nearby areas. Whether you’re shifting to a new home across town or moving your office a few blocks away, local moves are faster, simpler, and cost-effective."
          />
          <SectionText
            className="fade-top pt-5"
            text="With our expert team, your local move becomes stress-free. From careful packing to quick transport, we handle everything smoothly so you can settle into your new place with ease and peace of mind. 🚛✨"
          />
          <div className="spt32px flex flex-col gap-3">
            <div className="m-text fade-top flex items-center gap-2 text-accent-1">
              <IconCheckbox /> <span>Designing every move with precision and perfection.</span>
            </div>
            <div className="m-text fade-top flex items-center gap-2 text-accent-1">
              <IconCheckbox /> <span>Structured planning ensures smooth and reliable relocation.</span>
            </div>
            <div className="m-text fade-top flex items-center gap-2 text-accent-1">
              <IconCheckbox /> <span>Strong foundations make your moving journey stress-free.</span>
            </div>
          </div>
          <RoundedLink
            buttonText="Start moving"
            link="/pick-details"
            className="smt40px border-accent-3 bg-accent-3 text-black-4 hover:border-accent-3 hover:bg-transparent hover:text-black-4 lg:size-[160px]"
          />
        </div>
      </div>
      <Lines />
    </section>
  );
};

export default AboutLocal;

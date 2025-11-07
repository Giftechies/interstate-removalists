
import RoundedLink from "@/components/link/RoundedLink";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import Counter from "@/components/shared/scroll-top/Counter";
import { IconCheckbox } from "@tabler/icons-react";
import Image from "next/image";
import HomeThreeBannerLink from "../home-three/HomeThreeBannerLink";
import SectionSubTitle from "@/components/shared/SectionSubTitle";


const AboutLocal = ({imagepath1,imagepath2,counterNumber,counterText,title,text1,text2,buttonText,stepText1,stepText2,stepText3,subheading}) => {
  return (
    <section
      className="spt80px fade-wrapper spb120px relative overflow-hidden"
      id="scrollPosition"
    >
      <div className="container  grid grid-cols-12 items-center gap-6">
        <div className="relative  col-start-1 col-end-13 grid grid-cols-1 items-center gap-6 md:grid-cols-2 xl:col-end-7 xl:grid-cols-6 xl:items-end">
          <div className=" xl:col-start-1  xl:col-end-5">
            <Image
              src={imagepath1}
              width={416}
              height={444}
              alt="Mission image one"
              className="appear-down w-full mx-auto"
            />
          </div>
          <div className=" max-sm:w-full xl:col-start-5 xl:col-end-7">
            <Image
              src={imagepath2}
              width={330}
              height={348}
              alt="Mission image two"
              className="appear-down xl:-ms-25 max-lg:w-full h-[350px] object-cover xl:max-w-[unset] "
            />
            <div className="d3 max-md:hidden font-semibold text-[var(--primary-hex)]">
              <Counter value={counterNumber} />+
            <p className="xl-text text-black-1">{counterText}</p>
            </div>
          </div>
        </div>
        <div className="col-start-1 col-end-13 xl:col-start-8">
          <SectionSubTitle text={title? title: "Who we are"} className="fade-top" />
          <SectionTitle
            text={subheading?subheading:"Our Mission & Vision"}
           
          />
          <SectionText
            className="fade-top text-left pt-5"
            text={text1}
          />
          <SectionText
            className="fade-top text-left pt-5"
            text={text2}
          />
          <div className="spt32px flex flex-col gap-3">
            <div className="m-text fade-top flex items-center gap-2 text-accent-1">
              <IconCheckbox /> <span>{stepText1?stepText1:"Designing every move with precision and perfection."}</span>
            </div>
            <div className="m-text fade-top flex items-center gap-2 text-accent-1">
              <IconCheckbox /> <span>{stepText2?stepText2:"Structured planning ensures smooth and reliable relocation."}</span>
            </div>
            <div className="m-text fade-top flex items-center gap-2 text-accent-1">
              <IconCheckbox /> <span>{stepText3? stepText3:"Strong foundations make your moving journey stress-free."}</span>
            </div>
          </div>
           <HomeThreeBannerLink href="/#" className=" bg-prim rounded-full text-white-1    hover:bg-transparent hover:text-[var(--primary-hex)]  hover:border-[var(--primary-hex)] w-fit mt-6 " >{buttonText?  buttonText:"Get Instant Quote"}</HomeThreeBannerLink>  
        </div>
      </div>
    </section>
  );
};

export default AboutLocal;

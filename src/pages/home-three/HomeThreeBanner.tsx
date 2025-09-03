import bannerImage from "@/../public/images/home-three/banner-three-image.png";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import Image from "next/image";
import HomeThreeBannerLink from "./HomeThreeBannerLink";
import HomeThreeBannerSideElement from "./HomeThreeBannerSideElement";

const HomeThreeBanner = () => {
  return (
    <section className="fade-wrapper homebanner relative overflow-hidden  bg-[url('/img/banner-img/main-banner.jpg')] bg-cover bg-center  object-cover pt-[108px] md:m-5  md:mt-25 md:rounded-3xl before:absolute before:inset-0 before:bg-[var(--blue)]  xxl:mx-6">
      <div className="container relative  p-20 text-white-1 sm:pt-25 ">
         
        <div className="grid grid-cols-12 place-items-center">
          <div className="max-md:spt60px max-4xl:spb120px col-start-1 col-end-13  text-center   ">
            <SectionSubTitle
              text="Interstate Removalists"
              className="capitalize h6  text-white-1"
            />
            <h1 className="d4 title-animation mt-3 font-medium   ">
             Everything you need for your next move
            </h1>
            <p className=" mt-4  tracking-wider " >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, quos!</p>
            
            <div className="smt40px  flex items-center gap-5 max-xs:flex-wrap fade-top  justify-center">
             <HomeThreeBannerLink href="/pick-details" className=" bg-prim rounded-full text-white-1    hover:bg-transparent hover:text-white-1  hover:border-white-1 " >Get Instant Quote</HomeThreeBannerLink>
              {/* <HomeThreeBannerLink href="/pick-details" className=" border-[var(--primary)] text-[var(--primary)] hover:bg-prim hover:text-white-1 " >Get Instant Quote</HomeThreeBannerLink> */}
            </div>
          </div>
        </div>
   
      </div>
    </section>
  );
};

export default HomeThreeBanner;

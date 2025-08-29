import bannerImage from "@/../public/images/home-three/banner-three-image.png";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import Image from "next/image";
import HomeThreeBannerLink from "./HomeThreeBannerLink";
import HomeThreeBannerSideElement from "./HomeThreeBannerSideElement";

const HomeThreeBanner = () => {
  return (
    <section className="fade-wrapper homebanner relative overflow-hidden bg-sec bg-[url('https://plus.unsplash.com/premium_photo-1661410909722-e8a052143117?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW92ZXJ8ZW58MHx8MHx8fDA%3D')] bg-cover bg-center  object-cover pt-[108px] md:m-5  md:mt-25 md:rounded-3xl before:absolute before:inset-0 before:bg-black-1/60  xxl:mx-6">
      <div className="container relative  p-20 text-white-1 sm:pt-25 ">
         
        <div className="grid grid-cols-12 place-items-center">
          <div className="max-md:spt60px max-4xl:spb120px col-start-1 col-end-13  text-center   ">
            <SectionSubTitle
              text="SAVE & MANAGE YOUR MONEY"
              className="capitalize text-white-1"
            />
            <h1 className="d4 title-animation mt-3 font-medium   ">
             Everything you need for your next move
            </h1>
            <p className="xl-text smt24px fade-top text-white-4 ">
              Banking is the practice of accepting and safeguarding money owned
              and then to earn a profit.
            </p>
            <div className="smt40px flex items-center gap-5 max-xs:flex-wrap fade-top  justify-center">
              <HomeThreeBannerLink href="/signup">Open Account</HomeThreeBannerLink>
              <HomeThreeBannerLink href="/pick-details">Know Prices </HomeThreeBannerLink>
            </div>
          </div>
        </div>
   
      </div>
    </section>
  );
};

export default HomeThreeBanner;

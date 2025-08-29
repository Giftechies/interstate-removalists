import serviceStar from "@/../public/images/home-three/about-star.png";
import aboutImage from "@/../public/images/home-three/about.png";
import serviceStars from "@/../public/images/home-two/service-stars.png";
import RoundedLink from "@/components/link/RoundedLink";
import Lines from "@/components/shared/Lines";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";

const HomeThreeAbout = () => {
  return (
    <section className="spy120px fade-wrapper relative overflow-hidden">
      <div className="container relative">
        <div className="grid grid-cols-13 items-center gap-6">
          <div className="col-start-1 col-end-13 flex justify-end xl:col-end-6">
            <Image
              src='https://media.istockphoto.com/id/2151912551/photo/building-contractor-talking-to-clients-renovating-their-house.webp?a=1&b=1&s=612x612&w=0&k=20&c=aijAw2m6CwGNVX_hPCLLaN-4T4OiARrrbDaoDIL2PrQ='
              width={650}
              height={700}
              alt="about section image"
              className="appear-down max-xl:mx-auto max-xl:block xxl:max-w-[unset]"
            />
          </div>
          <div className="col-start-1 col-end-13 xl:col-start-6 xxl:col-start-7">
            <div className="max-w-[416px]">
              <SectionSubTitle text="About Us" />
              <SectionTitle
                text="Introduction to Moving Services"
                className="h2 mt-3"
              />
              <SectionText
                text="This section provides an overview of who we are, our mission, and how we make moving stress-free for families and businesses."
                className="fade-top mt-3 text-black-1"
              />
            </div>
            <div className="mt-8 flex gap-6 max-sm:flex-col-reverse sm:items-center sm:gap-8 xl:mt-[55px] xl:gap-15">
              <div>
                <RoundedLink
                  buttonText="About More"
                  link="/about-us"
                  className="border-[var(--primary)] bg-[var(--primary)] text-black-4 hover:border-[var(--primary)] hover:bg-transparent hover:text-black-4 lg:size-[160px]"
                />
              </div>
              <div>
                <SectionTitle text="Local and Long-Distance Movin" className="h2" />
                <SectionText
                  text="Highlights our expertise in both nearby and cross-country relocations, ensuring a smooth, reliable, and stress-free moving experience."
                  className="fade-top mt-3 text-black-1"
                />
              </div>
            </div>
          </div>
        </div>
        <Image
          src={serviceStars}
          width={125}
          height={120}
          alt="Service star"
          className="absolute right-5 top-0 animate-custom-pulse max-md:w-20 xxl:-right-15"
        />
      </div>
      <Image
        src={serviceStar}
        width={131}
        height={131}
        alt="Service star"
        className="absolute top-10 max-md:w-20 sm:left-18 sm:top-15"
      />
      <Lines />
    </section>
  );
};

export default HomeThreeAbout;

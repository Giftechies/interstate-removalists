"use client";
import image1 from "@/../public/images/home-one/home-one-testimonial-1.png";
import image2 from "@/../public/images/home-one/home-one-testimonial-2.png";
import image3 from "@/../public/images/home-one/home-one-testimonial-3.png";
import image4 from "@/../public/images/home-one/home-one-testimonial-4.png";
import image5 from "@/../public/images/home-one/home-one-testimonial-5.png";
import Lines from "@/components/shared/Lines";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionTitle from "@/components/shared/SectionTitle";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeOneTestimonialCard from "./HomeOneTestimonialCard";
import ButtonSlider from "@/components/buttons/ButtonSlider";

export const sliderData = [
  {
    image: "https://media.istockphoto.com/id/1130907832/photo/stunning-young-woman.webp?a=1&b=1&s=612x612&w=0&k=20&c=tySA5CpeNc1flFpStm8CgR3fNUBB78o-K-V9HVEIbp4=",
    text: "“Honestly, I didn’t expect it to be this easy. Got quotes in minutes and booked straight away. Movers were polite, careful with my things and quick.",
    name: "Ben C.",
    title: "VP of Marketing",
  },
  {
    image: "https://images.unsplash.com/photo-1481214110143-ed630356e1bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW58ZW58MHx8MHx8fDA%3D",
    text: "“I was stressing about moving my office gear interstate, but it all went smoother than I thought. Good communication and the guys handled everything well.",
    name: "Renee L.",
    title: "Freelance Designer",
  },
  {
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "“Booked through Interstate Removalists after a friend recommended it. The team they matched me with was top-notch – showed up early and kept me updated the whole way",
    name: "Aaron D",
    title: "Entrepreneur",
  },

];

const HomeOneTestimonials = () => {
  return (
    <section className=" spy80px relative overflow-hidden bg-zinc-100  ">
      <div className="container relative ">
      <div className="flex flex-col items-center" >
          <SectionSubTitle text="Testimonial " className=" mx-auto " />
        <SectionTitle text="What people say" className="mt-3" />
      </div>
        <div className="spt60px  ">
          <Swiper
            // slidesPerView={1}
            spaceBetween={30}
            speed={1400}
            loop={true}
            slidesPerView={1}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".customerSliderPrev",
             prevEl: ".customerSliderNext",
             
            }}
               breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 3,
              },
            }}
          >
            {sliderData.map((item, index) => (
              <SwiperSlide key={`rtrtr${index}`}>
                <HomeOneTestimonialCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <ButtonSlider className="mt-12 mx-auto  flex  justify-center right-0 bottom-0 " />
      </div>
      {/* <Lines /> */}
    </section>
  );
};

export default HomeOneTestimonials;

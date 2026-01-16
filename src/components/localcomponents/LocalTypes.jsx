"use client";
import teamVector from "@/../public/images/home-one/home-one-theam-vector.png";
import RoundedLink from "@/components/link/RoundedLink";
import CircleBottomLeft from "@/components/shared/CircleBottomLeft";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";
import SectionText from "@/components/shared/SectionText";
import Card from './Card'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Navigation } from "swiper/modules";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";



const LocalType = ({localCard, path, title,subtitle,text,buttontext,buttonlink}) => {

  return (
    <section className="spy80px relative overflow-clip bg-accent-4">
      <div className="container ">
        <div>
          <SectionSubTitle className=" text-center" text={`${subtitle}`}/>
          <SectionTitle
          
            text={`${title}`}
            
            className="mt-3 text-center "
          />
          <SectionText className=" text-center mt-2 " text={`${text}`}/>
        </div>
      <div className=" pt-20 overflow-hidden " >

          <Swiper 
         spaceBetween={24}
            speed={1400}
            loop={true}
         
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".customerSliderNext",
              prevEl: ".customerSliderPrev",
            }}
              breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
           >

           { localCard?.map((item,id)=>{
             return(
              <SwiperSlide key={id}>
              <Card  {...item} path={path} />
       </SwiperSlide>
            )
          })}
          </Swiper>
            <div className={"smt60px z-10 mx-auto flex w-fit items-center gap-4"}>
                      <button className="customerSliderPrev theme-transition-3 flex items-center justify-center rounded-full border border-prim bg-transparent p-3 font-semibold text-prim hover:bg-prim hover:text-white-1">
                        <IconArrowLeft size={24} />
                      </button>
                      <button className="customerSliderNext theme-transition-3 flex items-center justify-center rounded-full border border-prim bg-transparent p-3 font-semibold text-prim hover:bg-prim hover:text-white-1">
                        <IconArrowRight size={24} />
                      </button>
                    </div>


      </div>
      </div>
    </section>
  );
};

export default LocalType;

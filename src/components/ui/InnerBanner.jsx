import Link from "next/link";
import { IconArrowDown, IconChevronsRight } from "@tabler/icons-react";
import HomeThreeBannerLink from "@/pages/home-three/HomeThreeBannerLink";
import Breadcrumb from "../shared/Breadcrumbs";
import SectionText from "../shared/SectionText";



export default function Banner({imgpath,pagename,}){
    return(
          <section
          style={{backgroundImage:`url(${imgpath})`}}
          
          className="fade-wrapper  homebanner relative overflow-hidden   bg-cover bg-center  object-cover md:p-[20px] md:m-5  md:mt-25 md:rounded-3xl before:absolute before:inset-0 before:bg-black-1/60  xxl:mx-10">
      <div className="container overflow-hidden relative py-20 md:p-20 text-white-1 sm:pt-25  ">
         
        <div className=" place-items-center  ">
          <div className="max-md:spt60px  flex-center  flex-col text-center   ">
            <h1 className="h2 title-animation mt-3 font-medium upperercase  ">
            {pagename}
            </h1>
          
           
              <Breadcrumb/>
           
            
          </div>
        </div>
      
   
      </div>
    </section>
    )
}
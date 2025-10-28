import Animations from "@/components/animations/Animations";
import AboutWhyChooseUs from "@/pages/about-us/AboutWhyChooseUs";
import HomeOneService from "@/pages/home-one/HomeOneService";
import  InnerBanner from '@/components/ui/InnerBanner'
import HomeOneTestimonials from "@/pages/home-one/HomeOneTestimonials";
import { Metadata } from "next";
import OurServices from "@/components/ui/OurService";
import Map from "@/components/localcomponents/map"
import OurWorks from "@/pages/home-three/OurWorks";
import HomeTwoFaq from "@/pages/local/HomeTwoFaq";
import ServiceDetails from "@/pages/service-details/ServiceDetailsContent"
import ServiceAbout from "@/pages/service-details/ServiceAbout"
import LocalType from "@/components/localcomponents/LocalTypes";
import {serviceData} from "@/data/formdata"
import HomeOneFinancialPlanning from "@/pages/home-one/HomeOneFinancialPlanning";

export const metadata: Metadata = {
  title: "Services ",
  description: " ",
};

export default async function Services() {
  const res = await serviceData()
  console.log(res);
  
  return (
    <div>
      <InnerBanner pagename="Our Services" imgpath={'https://plus.unsplash.com/premium_photo-1661407783160-b6f950068f2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdmVycyUyMHNlcnZpY2VzfGVufDB8fDB8fHww'}  />
 {/* <HomeOneService /> */}
 <ServiceAbout/>
 <HomeOneFinancialPlanning data={res.data} />

      {/* <OurServices/> */}
    <Map/>
    <OurWorks/>
    <HomeTwoFaq/>
      {/* <HomeOneTestimonials /> */}
      <Animations />
    </div>
  );
}

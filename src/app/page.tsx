import Animations from "@/components/animations/Animations";
import Footer from "@/components/footer/Footer";
import NavbarContainer from "@/components/navbar/NavbarContainer";
import BannerOne from "@/pages/home-one/BannerOne";
// import HomeThreeBanner from "@/pages/home-three/HomeThreeBanner";
import HomeOneFaq from "@/pages/home-one/HomeOneFaq";
import HomeOneFinancialPlanning from "@/pages/home-one/HomeOneFinancialPlanning";
import HomeOneInfo from "@/pages/home-one/HomeOneInfo";
import HomeOneMission from "@/pages/home-one/HomeOneMission";
import HomeOneOurTeam from "@/pages/home-one/HomeOneOurTeam";
import HomeOnePricingPlan from "@/pages/home-one/HomeOnePricingPlan";
import HomeOneRecentBlog from "@/pages/home-one/HomeOneRecentBlog";
import HomeOneService from "@/pages/home-one/HomeOneService";
import HomeOneTestimonials from "@/pages/home-one/HomeOneTestimonials";
import HomeThreeBanner from "@/pages/home-three/HomeThreeBanner";
import NavbarContainerTwo from "@/components/navbar/NavbarContainerTwo";
import { Metadata } from "next";
import HomeThreeService from "@/pages/home-three/HomeThreeService";
import HomeThreeAbout from "@/pages/home-three/HomeThreeAbout";
import OurWorks from "@/pages/home-three/OurWorks"
import HomeService from "@/pages/home-three/HomeService";
import HomeTwoServices from "@/pages/landing-two/HomeTwoServices";

export const metadata: Metadata = {
  title: "Interstate removalists",
  description: "Providing the solution for relocations.",
};

export default function Home() {
  return (
    <div>
      {/* <BannerOne /> */}
      <HomeThreeBanner />
      <HomeThreeAbout/>
      <HomeThreeService/>
        {/* <HomeTwoServices /> */}
      {/* <HomeOneService /> */}
      <OurWorks/>
      <HomeOneFinancialPlanning />
      {/* <HomeOnePricingPlan /> */}
      <HomeOneTestimonials />
      {/* <HomeOneOurTeam /> */}
      {/* <HomeOneFaq /> */}
      <HomeOneInfo />
      <HomeOneRecentBlog />
      <Animations />
    </div>
  );
}

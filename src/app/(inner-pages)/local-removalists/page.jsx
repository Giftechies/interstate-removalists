import Banner from "@/components/ui/MainBanner";
import Animations from "@/components/animations/Animations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import AboutLocal from "@/pages/local/AboutPage";
import LocalType from "@/components/localcomponents/LocalTypes";
import dynamic from "next/dynamic";
import { localCard } from "@/data/localCard";
import OurWorks from "@/pages/home-three/OurWorks";
import HomeTwoFaq from "@/pages/local/HomeTwoFaq";
// import Map from "@/pages/local/map"

const Map = dynamic(()=>import('@/components/localcomponents/map'),{
  ssr:false,
})



export default function localRemovalists() {
  return (
    <>
      <Banner
        imgpath={"/img/banner-img/local.webp"}
        pagename="Local removalists"
        text=" Banking is the practice of accepting and safeguarding money owned
              and then to earn a profit."
      />
      <Breadcrumbs pageLink="/local-removalists" pageName="Local removalists" />
      <AboutLocal />
      <LocalType
        localCard={localCard}
        subtitle="Local Move"
        title="Interstate Relocation Made Simple"
        text="Moving across states? Our interstate removalists ensure safe, timely, and affordable delivery of your belongings anywhere in Australia."
        buttontext="Get start Moving"
        buttonlink="/pick-details"
      />
      <Map/>
      <OurWorks/>
      <HomeTwoFaq/>
      <Animations />
    </>
  );
}

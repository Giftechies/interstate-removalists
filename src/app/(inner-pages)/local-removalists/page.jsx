import Banner from "@/components/ui/InnerBanner";
import Animations from "@/components/animations/Animations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import InnerAboutLocal from "@/pages/local/InnerAboutPage";
import Separator from "@/pages/local/Separater";
import LocalType from "@/components/localcomponents/LocalTypes";
import dynamic from "next/dynamic";
import { localCard } from "@/data/localCard";
import OurWorks from "@/pages/home-three/OurWorks";
import HomeTwoFaq from "@/pages/local/HomeTwoFaq";
import HowItWorksPage from "../how-it-work/page";
const Map = dynamic(() => import("@/components/localcomponents/map"), {
  ssr: false,
});

export default function localRemovalists() {
    const markers = [
    { id: 1, position: [-33.8688, 151.2093], name: "Sydney", color: "#ff5733" }, 
    { id: 2, position: [-37.8136, 144.9631], name: "Melbourne", color: "#3498db" },
    { id: 3, position: [-27.4698, 153.0251], name: "Brisbane", color: "#2ecc71" },
    { id: 4, position: [-27.7898, 153.0251], name: "Brisbane", color: "#2ecc71" },
    { id: 5, position: [-27.5898, 153.0251], name: "Brisbane", color: "#2ecc71" },
    { id: 6, position: [-27.4748, 153.0251], name: "Brisbane", color: "#2ecc71" },
  ];
  return (
    <>
      <Banner
        imgpath={"/img/banner-img/local.webp"}
        pagename="Local Removalists"
        text=" Banking is the practice of accepting and safeguarding money owned
              and then to earn a profit."
      />

      <InnerAboutLocal
        imagepath1={"/img/innerimg/localimg.png"}
        imagepath2={
          "https://media.istockphoto.com/id/487175846/photo/delivery-man-unloading-truck.webp?a=1&b=1&s=612x612&w=0&k=20&c=OkcEhNbpV0w9JPTgNqCkJ_IZx5fXnqktOdbOsffF3Es="
        }
        counterText={"Family choose us"}
        counterNumber={80}
        title={"What is Local Move?"}
        text1={
          "Local moving refers to the process of relocating household goods or personal belongings within the same city or metropolitan area.  "
        }
        text2={
          "With our expert team, your local move becomes stress-free. From careful packing to quick transport, we handle everything smoothly so you can settle into your new place with ease and peace of mind. 🚛✨"
        }
         stepText1={"Designing every move with precision and perfection."}
        stepText2={"Structured planning ensures smooth and reliable relocation."}
        stepText3={"Strong foundations make your moving journey stress-free."}
      />
      <LocalType
        localCard={localCard}
        subtitle="Local Move"
        title="Interstate Relocation Made Simple"
        text="Moving across states? Our interstate removalists ensure safe, timely, and affordable delivery of your belongings anywhere in Australia."
        buttontext="Get start Moving"
        buttonlink="/pick-details"
      />
      <Separator title="Ready to Get Your Move Sorted?" content="Enter your suburb and moving date — we’ll do the rest by matching you with insured, dependable removalists nearby." />
      <Map  markers={markers} />
      <OurWorks/>
      {/* <HowItWorksPage/> */}
      <HomeTwoFaq />
      <Animations />
    </>
  );
}

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
      
       
      
        title={"What is Local Move?"}
        subheading={"Move Better With Movers Who Care"}
        text1={
          "A good move starts with the right people. That’s why we only work with removalists who’ve earned their reputation through safe delivery, consistency, honesty, and hard work. On Interstate Removalists, you can check and compare movers near you, their rates, and what other locals say about them- all before you book. When you’re ready, pick your mover, lock in your date, and let the professionals handle your relocation.  "
        }
        
    
      />
      <LocalType
        localCard={localCard}
        subtitle="Local Move"
        title="Every Move Matters — Especially Yours"
        text="Interstate Removalists helps you find the right movers anywhere across Australia —fair, fast and no fuss. Just pick your city, and get your move sorted today."
        buttontext="Get start Moving"
        buttonlink="/pick-details"
      />
      <Map  markers={markers} />
      <Separator title="Ready to Get Your Move Sorted?" content="Enter your suburb and moving date — we’ll do the rest by matching you with insured, dependable removalists nearby." />
      <OurWorks/>
      {/* <HowItWorksPage/> */}
      <HomeTwoFaq />
      <Animations />
    </>
  );
}

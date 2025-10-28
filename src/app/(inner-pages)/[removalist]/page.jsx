import Banner from "@/components/ui/InnerBanner";
import Animations from "@/components/animations/Animations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import InnerAboutLocal from "@/pages/local/InnerAboutPage";
import Separator from "@/pages/local/Separater";
import LocalType from "@/components/localcomponents/LocalTypes";
import dynamic from "next/dynamic";
// import { localCard } from "@/data/localCard";
import OurWorks from "@/pages/home-three/OurWorks";
import HomeTwoFaq from "@/pages/local/HomeTwoFaq";
import HowItWorksPage from "../how-it-work/page";
import EditorData from "@/components/ui/EditorData";
import { pagesData } from "@/data/formdata";
const Map = dynamic(() => import("@/components/localcomponents/map"), {
  ssr: false,
});

export default async function localRemovalists({params}) {
  const {removalist} = params;
  const res = await  pagesData(removalist)

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
        pagename={data.title}
        text=" Banking is the practice of accepting and safeguarding money owned
              and then to earn a profit."
      />
      {/* <EditorData  /> */}

      {/* <InnerAboutLocal
      
       
      
        title={"What is Local Move?"}
        subheading={data.summary}
        text1={
         data.description
        }
        
    
      /> */}
      <EditorData content={data.description} />
      <LocalType
        localCard={localCard}
        path={removalist}
        subtitle="Local Move"
        title="Every Move Matters — Especially Yours"
        text="Interstate Removalists helps you find the right movers anywhere across Australia —fair, fast and no fuss. Just pick your city, and get your move sorted today."
        buttontext="Get start Moving" 
        buttonlink="/pick-details"
      />
      { data.show_map && <Map  markers={markers} />}
      <Separator title="Ready to Get Your Move Sorted?" content="Add your move details and dates, and we’ll arrange for insured interstate movers to handle your stuff properly every kilometre of the way." />
     {data.show_process && <OurWorks/>}
      {/* <HowItWorksPage/> */}
     {data.show_faq && <HomeTwoFaq />}
      <Animations />
    </>
  );
}

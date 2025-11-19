import Banner from "@/components/ui/InnerBanner";
import Animations from "@/components/animations/Animations";
import Separator from "@/pages/local/Separater";
import LocalType from "@/components/localcomponents/LocalTypes";
import dynamic from "next/dynamic";
import OurWorks from "@/pages/home-three/OurWorks";
import HomeTwoFaq from "@/pages/local/HomeTwoFaq";

import EditorData from "@/components/ui/EditorData";
import { pagesData } from "@/data/formdata";
const Map = dynamic(() => import("@/components/localcomponents/map"), {
  ssr: false,
});

export default async function localRemovalists({params}) {
  const {removalist} = params;
  const res = await  pagesData(removalist)
  const data = res?.data
  const localCard = data?.children
  const localText = removalist =="local-removalists"?
  "Interstate Removalists helps you find the right movers anywhere across Australia — fair, fast, and no fuss. Just pick your city, and get your move sorted today."
  :
  "We’re committed to being Australia's best interstate removalists platform — where customers can compare, choose, and book with confidence. Here’s why you can rely on us:"

  const localtitle = removalist =="local-removalists"? 
  "Every Move Matters — Especially Yours"
  :
  "Moving Interstate? We’ll Point You to the Right Removalists"
  
  const SeparateTitle = removalist =="local-removalists"?
   "Ready to Get Your Move Sorted?"
   :
   "Ready to Start Your Interstate Move?"
  
  const SeparateText = removalist =="local-removalists"? 
    "Choose your state, city, suburb, services, and moving date — we’ll do the rest by matching you with insured, dependable removalists nearby."
    :
    "Add your move details and dates, and we’ll arrange for insured interstate movers to handle your stuff properly every kilometre of the way."


  
  
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
        pagename={data?.title}
      />
     
      <EditorData content={data?.description} />
      <LocalType
        localCard={localCard}
        path={removalist}
        subtitle="Local Move"
        title={localtitle}
        text={localText}
        buttontext="Get start Moving" 
        buttonlink="/pick-details"
      />
      { data?.show_map && <Map  markers={markers} />}
      <Separator title={SeparateTitle}content={SeparateText} />
     {data?.show_process && <OurWorks/>}
     {data?.show_faq && <HomeTwoFaq />}
      <Animations />
    </>
  );
}

import Animations from "@/components/animations/Animations";
import Banner from "@/components/ui/InnerBanner";
import DetailAbout from "@/components/detailspage/DetailAbout"
import OurWorks from "@/pages/home-three/OurWorks";
import HomeOneTestimonials from "@/pages/home-one/HomeOneTestimonials";
import dynamic from "next/dynamic";
import HomeTwoFaq from "@/pages/local/HomeTwoFaq";
import InnerAboutPage from "@/pages/local/InnerAboutPage";
import Separater from "@/pages/local/Separater";
import Suburbs from  "@/pages/local/Suburbs"
import { pagesData } from "@/data/formdata";

const Map = dynamic(()=>import("@/components/localcomponents/map"),{ssr:false,})
export default async  function city( {params} ){
    const markers = [
    { id: 1, position: [-33.8688, 151.2093], name: "Sydney", color: "#ff5733" }, 
    { id: 2, position: [-37.8136, 144.9631], name: "Melbourne", color: "#3498db" },
    { id: 3, position: [-27.4698, 153.0251], name: "Brisbane", color: "#2ecc71" },
    { id: 4, position: [-27.7898, 153.0251], name: "Brisbane", color: "#2ecc71" },
    { id: 5, position: [-27.5898, 153.0251], name: "Brisbane", color: "#2ecc71" },
    { id: 6, position: [-27.4748, 153.0251], name: "Brisbane", color: "#2ecc71" },
  ];

  const {removalist, city} = params
  const res = await pagesData(city)
 
  if(res.status=="false")  return <h4>Something went Wrong</h4>
  const data = res.data



    return(
      <>
      <Banner imgpath="https://media.istockphoto.com/id/1596022033/photo/unloading-boxes-and-furniture-from-a-pickup-truck-to-a-new-house-with-service-cargo-two-men.webp?a=1&b=1&s=612x612&w=0&k=20&c=4oDat2FWwQNbcy5rhZ0EEWaWvwbXfYOn-Gncd1PQ-K0=" 
      pagename={data.title}
      
      text={'Move anywhere in Sydney with our reliable removalists, ensuring safety, efficiency, and complete customer satisfaction.'}
      />
      <InnerAboutPage 
      
  
     
        counterText={"Family choose us"}
        counterNumber={80}
        title={"What is Local Move?"}
        text1={
          data.description
        }
  
      />
      {/* <Separater /> */}
      <Suburbs suburbs={data.children} removalist={removalist} city={city} />
   { data.show_map &&  <Map markers={markers}  />}
      { data.show_process && <OurWorks/>}
      { data.show_faq && <HomeTwoFaq/>}
      
      <Animations/>
      </>
    )
}
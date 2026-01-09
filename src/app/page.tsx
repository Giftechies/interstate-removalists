import Animations from "@/components/animations/Animations";
import HomeOneFinancialPlanning from "@/pages/home-one/HomeOneFinancialPlanning";
import HomeOneInfo from "@/pages/home-one/HomeOneInfo";
import HomeOneTestimonials from "@/pages/home-one/HomeOneTestimonials";
import HomeThreeBanner from "@/pages/home-three/HomeThreeBanner";
import { Metadata } from "next";
import WhyChooseUs from "@/pages/landing-two/HomeTwoServices";
import HomeTwoFaq from "@/pages/local/HomeTwoFaq";
import HowWeWork from "@/pages/how-it-works/HowItrWorksContent";
import AboutLocal from "@/pages/local/AboutPage";
import { serviceData } from "@/data/formdata";


export const metadata: Metadata = {
  title: "Interstate removalists",
  description: "Providing the solution for relocations.",
};

export default async function Home() {
  const res = await serviceData()
  return (
    <div>
      <HomeThreeBanner />
      <AboutLocal
        imagepath1={"/img/innerimg/localimg.png"}
        imagepath2={
          "https://media.istockphoto.com/id/487175846/photo/delivery-man-unloading-truck.webp?a=1&b=1&s=612x612&w=0&k=20&c=OkcEhNbpV0w9JPTgNqCkJ_IZx5fXnqktOdbOsffF3Es="
        }
        counterText={"Family choose us"}
        counterNumber={50}
        title={"Few words about"}
        subheading={"Interstate Removalists"}
        text1={
          "Moving’s tough, but finding a good mover shouldn’t be. That’s why we built Interstate Removalists: a one-stop place to find verified, experienced, and safe removalists in Australia, who handle your relocation with trust and care."
        }
        text2={
          "Got a move coming up? You can find your interstate or local removalist in Sydney, Brisbane, Canberra, or nearby areas, right here on Interstate Removalists. Here’s what to expect:"
        }
        // buttonText={"Know More"}
        stepText1={"National coverage — find trusted movers across Australia."}
        stepText2={"Straightforward quotes — no hidden costs, ever."}
        stepText3={"Strong foundations make your moving journey stress-free."}
        />
      <WhyChooseUs />
      <HowWeWork />
       <HomeOneFinancialPlanning data={res.data.slice(0,4)} />
      <HomeOneTestimonials  />
      <HomeTwoFaq />
      <HomeOneInfo />
      <Animations />
  
    </div>
  );
}

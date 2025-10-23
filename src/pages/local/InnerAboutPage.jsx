
import RoundedLink from "@/components/link/RoundedLink";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import Counter from "@/components/shared/scroll-top/Counter";
import { IconCheckbox } from "@tabler/icons-react";
import Image from "next/image";
import HomeThreeBannerLink from "../home-three/HomeThreeBannerLink";
import SectionSubTitle from "@/components/shared/SectionSubTitle";


const AboutLocal = ({title,text1,text2,buttonText,subheading}) => {
  return (
    <section
      className="spy80px fade-wrapper  relative overflow-hidden"
      id="scrollPosition"
    >
      <div className="container  flex items-center gap-6">
      
        <div className="  mx-auto  md:w-[80%] text-center  ">
          <SectionSubTitle text={title? title: "Who we are"} className="fade-top  text-center  " />
          <SectionTitle
            text={subheading?subheading:"Our Mission & Vision"}
            className="h1 pt-3 text-center "
          />
          <SectionText
            className="fade-top pt-5"
            text={text1}
          />
          <SectionText
            className="fade-top pt-5"
            text={text2}
          />
        
           <HomeThreeBannerLink href="/pick-details" className="  mx-auto bg-prim rounded-full text-white-1    hover:bg-transparent hover:text-primary  hover:border-primary w-fit mt-6 " >{buttonText?  buttonText:"Get Instant Quote"}</HomeThreeBannerLink>  
        </div>
      </div>
    </section>
  );
};

export default AboutLocal;

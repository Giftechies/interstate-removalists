import Banner from "@/components/ui/InnerBanner"
import HomeTwoFaq from "@/pages/local/HomeTwoFaq";
import OurWorks from "@/pages/home-three/OurWorks";
import Animations from "@/components/animations/Animations";
import EditorData from "@/components/ui/EditorData"
import dynamic from "next/dynamic"
import Surburs from "@/pages/local/Suburbs"
const Map = dynamic(()=> import("@/components/localcomponents/map"),{ssr:false} )




export default function subursPage({params}){
    const {surburs} = params
    console.log(surburs);
    const htmlContent = `<div><h1>${surburs}</h1><p>Welcome to the page for ${surburs}.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, perferendis porro eligendi iusto, et corporis fugit nihil tempora inventore modi nesciunt. Veritatis neque, quod itaque voluptate labore distinctio eaque esse aspernatur praesentium facere nemo iure!</p>
    </div>`;
     const suburbs = ["Abbotsbury","Bondi","Parramatta","Chatswood","Manly NSW","Acacia Ridge","Amberley","Aspley"]
    return(
       <>
       <Banner pagename={surburs} />
      <EditorData content={htmlContent} />
         <Surburs suburbs={suburbs} />
       <OurWorks/>
       <Map/>
       <HomeTwoFaq/>
       <Animations/>
       </>
    )
}
import Banner from "@/components/ui/InnerBanner"
import HomeTwoFaq from "@/pages/local/HomeTwoFaq";
import OurWorks from "@/pages/home-three/OurWorks";
import Animations from "@/components/animations/Animations";
import EditorData from "@/components/ui/EditorData"
import InnerAboutPage from "@/pages/local/InnerAboutPage"
import dynamic from "next/dynamic"
import Surburs from "@/pages/local/Suburbs"
import  {pagesData} from "@/data/formdata"
const Map = dynamic(()=> import("@/components/localcomponents/map"),{ssr:false} )




export default async function subursPage({params}){
    const {removalist, city,surburs} = params
    const res = await pagesData(surburs)
      if(res.status=="false")  return <h4>Something went Wrong</h4>
    const data = res.data
    console.log(surburs);
    console.log(data.show_process,"d");
    console.log(data.show_process,"dffsf");
    
    const htmlContent = `<div><h1>${surburs}</h1><p>Welcome to the page for ${surburs}.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, perferendis porro eligendi iusto, et corporis fugit nihil tempora inventore modi nesciunt. Veritatis neque, quod itaque voluptate labore distinctio eaque esse aspernatur praesentium facere nemo iure!</p>
    </div>`;
     const suburbs = ["Abbotsbury","Bondi","Parramatta","Chatswood","Manly NSW","Acacia Ridge","Amberley","Aspley"]
    return(
       <>
       <Banner pagename={surburs} />
       <InnerAboutPage text1={data.description} />
      {/* <EditorData content={data.description} /> */}
         <Surburs suburbs={suburbs} />
         { data.show_map &&  <Map />}
            {data.show_process && <OurWorks/>}
            { data.show_faq && <HomeTwoFaq/>}
       </>
    )
}
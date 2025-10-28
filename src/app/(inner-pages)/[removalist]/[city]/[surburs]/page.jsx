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
    const sres = await pagesData(city)
      if(res.status=="false" || sres.status=="false")  return <h4>Something went Wrong</h4>
    const data = res.data
    const sdata = sres.data


    
    const htmlContent = `<div><h1>${surburs}</h1><p>Welcome to the page for ${surburs}.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, perferendis porro eligendi iusto, et corporis fugit nihil tempora inventore modi nesciunt. Veritatis neque, quod itaque voluptate labore distinctio eaque esse aspernatur praesentium facere nemo iure!</p>
    </div>`;
    return(
       <>
       <Banner pagename={data.title} />
       {/* <InnerAboutPage text1={data.description} /> */}
      <EditorData content={data.description} />
         { sdata.children && <Surburs suburbs={sdata.children} removalist={removalist} city={city} />}
         { data.show_map &&  <Map />}
            {data.show_process && <OurWorks/>}
            { data.show_faq && <HomeTwoFaq/>}
            <Animations/>
       </>
    )
}
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

export const revalidate = 3600;
export async function generateStaticParams() {
  const removalists = ["local-removalists", "interstate-removalists"]

  const params= []

  for (const removalist of removalists) {
    // 1️⃣ Get cities
    const cityRes = await pagesData(removalist)
    const cities = cityRes?.data?.children || []

    for (const city of cities) {
      // 2️⃣ Get suburbs
      const suburbRes = await pagesData(city.slug)
      const suburbs = suburbRes?.data?.children || []

      for (const suburb of suburbs) {
        params.push({
          removalist:removalist,
          city: city.slug,
          surburs: suburb.slug,
        })
      }
    }
  }

  return params
}

export default async function subursPage({params}){
    const {removalist, city,surburs} = params
    const res = await pagesData(surburs)
    const sres = await pagesData(city)
      if(res.status=="false" || sres.status=="false")  return <h4>Something went Wrong</h4>
    const data = res.data
    const sdata = sres.data


    return(
       <>
       <Banner pagename={data?.title} />
       {/* <InnerAboutPage text1={data.description} /> */}
      <EditorData content={data?.description} />
         { sdata?.children && <Surburs suburbs={sdata?.children} removalist={removalist} city={city} />}
         { data?.show_map &&  <Map />}
            {data?.show_process && <OurWorks/>}
            { data?.show_faq && <HomeTwoFaq/>} 
            <Animations/>
       </>
    )
}
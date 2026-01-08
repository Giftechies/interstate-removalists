
import  InnerBanner from '@/components/ui/InnerBanner'
import {  serviceData } from '@/data/formdata'
import ServiceEditor from "@/pages/service/SeviceEditor"

// export const revalidate = 3600;
// export async function generateStaticParams(){
//     const res = await serviceData()
//     return res?.data?.map((item)=>({
//         page:item.slug,
//     }))
    
// }



export default async function page({params}) {
    const res = await serviceData()
    const services = res?.data?.filter(item => item.slug === params.page)[0]
    console.log('service',services);
    
    
    return(
        <>
            <InnerBanner  pagename={services?.title} imgpath={services?.image}  />
            <ServiceEditor params={params} res={res} services={services} />
        </>
    )
    
}

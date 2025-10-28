
import  InnerBanner from '@/components/ui/InnerBanner'
import {  serviceData } from '@/data/formdata'
import ServiceEditor from "@/pages/service/SeviceEditor"
import HomeThreeBannerLink from '@/pages/home-three/HomeThreeBannerLink'
import Link from 'next/link'


export default async function page({params}) {
    const res = await serviceData()
    const services = res.data.filter(item => item.slug === params.page)[0]
    console.log("dks>>>>>services",services);    

    console.log("dks>>>>>services",services.description);
    
    return(
        <>
            <InnerBanner  pagename={services.title} imgpath={'https://plus.unsplash.com/premium_photo-1661407783160-b6f950068f2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdmVycyUyMHNlcnZpY2VzfGVufDB8fDB8fHww'}  />
            <ServiceEditor params={params} res={res} services={services} />


    
        </>
    )
    
}
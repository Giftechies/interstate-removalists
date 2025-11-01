
import  InnerBanner from '@/components/ui/InnerBanner'
import {  serviceData } from '@/data/formdata'
import ServiceEditor from "@/pages/service/SeviceEditor"
import HomeThreeBannerLink from '@/pages/home-three/HomeThreeBannerLink'
import Link from 'next/link'


export default async function page({params}) {
    const res = await serviceData()
    const services = res.data.filter(item => item.slug === params.page)[0]
    
    return(
        <>
            <InnerBanner  pagename={services.title} imgpath={services.image}  />
            <ServiceEditor params={params} res={res} services={services} />
        </>
    )
    
}

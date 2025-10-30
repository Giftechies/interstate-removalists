import SectionTitle from "@/components/shared/SectionTitle"
import HomeThreeBannerLink from "../home-three/HomeThreeBannerLink"
import SectionText from "@/components/shared/SectionText"

export default function Separater({title="Ready to Get Your Move Sorted?",content="Add your move details and dates, and we’ll arrange for insured interstate movers to handle your stuff properly every kilometre of the way.",buttonText=''}) {
    return <>
<section className=" spy40px bg-sec text-white-1 " >
<div className="container spy32px text-center  " >
    <SectionTitle text={title} />
    <SectionText className="mt-4 text-white-1 "  text={content} />

     <HomeThreeBannerLink href="/pick-details" className="  mx-auto bg-prim rounded-full text-white-1    hover:bg-transparent hover:text-[var(--primary-hex)]  hover:border-[var(--primary-hex)] w-fit mt-6 " >{buttonText?  buttonText:"Get Instant Quote"}</HomeThreeBannerLink>

</div>
    </section>
    </>
}
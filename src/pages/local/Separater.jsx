import HomeThreeBannerLink from "../home-three/HomeThreeBannerLink"

export default function Separater({title="Ready to Get Your Move Sorted?",content="Enter your suburb and moving date — we’ll do the rest by matching you with insured, dependable removalists nearby.",buttonText=''}) {
    return <>
<section className=" spy40px bg-secondary text-white-1 " >
<div className="container spy32px text-center  " >
    <span className=" h2 font-semibold title-animation   " >{title}</span>
    <p className=" mt-4 h5 text-white-1 " >{content}</p>
     <HomeThreeBannerLink href="/pick-details" className="  mx-auto bg-prim rounded-full text-white-1    hover:bg-transparent hover:text-primary  hover:border-primary w-fit mt-6 " >{buttonText?  buttonText:"Get Instant Quote"}</HomeThreeBannerLink>

</div>
    </section>
    </>
}
import HomeThreeBannerLink from "@/pages/home-three/HomeThreeBannerLink";

export default function RegisterAbout(){
    return(
        <div className= " py-12 " >
         <main className="container  " >
               <h2 className=" h3 text-center " >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, commodi.</h2>
            <p className=" h6 text-center" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, est! Assumenda quos blanditiis nisi doloremque tempore nam iste, facere vel?</p>
            <HomeThreeBannerLink href="/register" className="w-fit hover:text-[var(--primary-hex)] mx-auto mt-4 " > Register Now </HomeThreeBannerLink>
         </main>
        </div>
    )
}
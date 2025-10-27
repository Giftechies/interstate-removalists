import Image from "next/image";
import serviceImage from "@/../public/img/innerimg/service.avif"
import HomeThreeBannerLink from "../home-three/HomeThreeBannerLink";

export default function ServiceAbout() {
    return(
        <section className="spy80px " >
            <div className="container grid grid-cols-12 gap-6 items-stretch ">
                {/* image */}
                <div className="img-container col-span-12 md:col-span-6 rounded-lg overflow-hidden h-full group cursor-pointer " >
                    <Image src={serviceImage} width={250} height={250} alt="service image" className="w-full h-full object-cover object-center group-hover:scale-1.1 " />

                </div>

                {/* text */}
                <div className=" text-container col-span-12 md:col-span-6 h-full   " >
                    <h2 className=" h2 mb-4 text-black-1 text-animate " >About Our Service</h2>
                    <p className=" text-black-3 mb-4 " >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className=" text-black-3 " >
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <HomeThreeBannerLink href="/pick-details" className="  mx-auto bg-prim rounded-full text-white-1    hover:bg-transparent hover:text-primary  hover:border-primary w-fit mt-6 " >{"Get Instant Quote"}</HomeThreeBannerLink>  
                </div>
                

            </div>
         
        </section>
    )
}
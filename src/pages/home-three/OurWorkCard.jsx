import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import { cn } from "@/utils/cn";
import Image from "next/image";

export default function OurWorkCard({iconname:path,step,text,heading,className}){
    return(
        <div className={cn("work border-2  w-[20rem] spx24px spy24px  place-items-center group  ",className)}>
            <div className="icon-box    rounded-full w-[70%] aspect-square  bg-prim   relative ">
             <Image width={250} height={250} src={path} alt="" className="object-contain object-center w-[180px] h-[180px] " /> 
            
            <h6 className="h3  bg-white-1 text-[var(--primary)] w-[30%] aspect-square  flex items-center  justify-center rounded-full  absolute -bottom-8 " >{step}</h6>
            </div>
            <div className=" content mt-10 text-center ">
            
                <SectionSubTitle
                text={heading}
                className="h3 font-medium text-black-2"
                
                />
                <SectionText
                text={text}
                />
            </div>

           

        </div>

    )
}
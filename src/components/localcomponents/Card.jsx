
import Image from "next/image";
import Link from "next/link";


export default function Card({title,content,imagepath,path}){
    return(
       <>
       <Link 
       href={path}>
       
        <div className="w-full   overflow-hidden rounded-xl border shadow-md p-4 hover:bg-secondary text-white-1 group theme-transition-3 bg-white-1 ">
           
         <div className=" size-18 rounded-full overflow-hidden mx-auto " >
                <Image
              src={`${imagepath}`}
              width={300}
              height={280}
              alt="Mission image two"
              className=" w-full z-0 h-full object-cover group-hover:scale-[1.1] theme-transition-6 object-center "
            />
         </div>
            <p className=" text-center mt-4 h5 font-medium text-primary group-hover:text-white-1  theme-transition-3 ">{title}</p>
           <p className=" text-black-3  text-center h6 group-hover:text-white-1  theme-transition-3 " > Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis placeat odio, commodi quasi minima aliquam quas voluptates non aliquid beatae amet voluptate et </p>
          
            
        </div></Link>
       </>
    )
}
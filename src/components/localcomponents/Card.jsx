
import Image from "next/image";
import Link from "next/link";


export default function Card({title,summary,imagepath='' ,slug,path}){
   const imgpath ='https://images.unsplash.com/photo-1587325889132-2c9e393e7d70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG93bnxlbnwwfHwwfHx8MA%3D%3D'
    return(
       <>
       <Link 
       href={` ${path}/${slug} `} >
       
        <div className="w-full   overflow-hidden rounded-xl border shadow-md p-6 hover:bg-secondary text-white-1 group theme-transition-3 bg-white-1 ">
           
         <div className=" size-18 rounded-full overflow-hidden mx-auto " >
                <Image
              src={`${imgpath} `}
              width={300}
              height={280}
              alt="Mission image two"
              className=" w-full z-0 h-full object-cover group-hover:scale-[1.1] theme-transition-6 object-center "
            />
         </div>
            <p className=" text-center mt-4 h5 font-medium text-primary group-hover:text-white-1  theme-transition-3 ">{title}</p>
           <p className=" text-black-3 h6 mt-1 group-hover:text-white-1  theme-transition-3 text-justify " >{summary} </p>
          
            
        </div></Link>
       </>
    )
}
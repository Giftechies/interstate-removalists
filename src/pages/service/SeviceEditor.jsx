import Link from 'next/link';
import HomeThreeBannerLink from '../home-three/HomeThreeBannerLink';




export default  function ServiceEditor({params,res=[],services={}}) {
    return(
           <section className="spy80px  " >
        <div className="container grid grid-cols-12 gap-6" >
        <div className=' col-span-9 ' >
         
                 <div className="editor " dangerouslySetInnerHTML={{__html:services?.description}}  />
                   {/* <HomeThreeBannerLink href="/pick-details" className="  mx-auto bg-prim rounded-full text-white-1    hover:bg-transparent hover:text-primary  hover:border-primary w-fit mt-6 " >Get Instant Quote</HomeThreeBannerLink> */}
        </div>
        {/* sidebar */}
           <div className='  col-span-3 relative  ' >
                <div className='  bg-gray-100 p-6 rounded-lg sticky top-20 border shadow-lg w-full h-fit py-2 ' >
                <h3 className=' text-xl font-semibold mb-4 text-[var(--primary-hex)] text-center ' >Other Services</h3>
                <div  data-lenis-prevent className=' flex flex-col gap-3 items-center h-80 overflow-auto  navbar-dropdown-scrollbar  ' >
                    {res?.data?.map((item)=>{
                      const IsActive = item?.slug ===params?.page
                        return(
                              <Link key={item.id} href={`/services/${item.slug}`} className={`  ${IsActive?"text-[var(--primary-hex)]  font-medium":"text-gray-700"}  hover:text-[var(--primary-hex)]   `}>{item?.title}</Link>
                        )
                    }
                      
                    )}
                    
                    </div>


           </div>
        </div>
        </div>
       </section>
    )
}
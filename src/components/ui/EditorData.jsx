import HomeThreeBannerLink from "@/pages/home-three/HomeThreeBannerLink";



export default function EditorData ({content='',buttonText="", show_button=true}) {

    console.log("editor>>>>>>>",content);
    
    return(
        <section className="spy80px ">
            <div className="container text-center " >
                <div className="editor " dangerouslySetInnerHTML={{__html:content}}  />
                    { show_button ? <HomeThreeBannerLink href="/pick-details" className="  mx-auto bg-prim rounded-full text-white-1    hover:bg-transparent hover:text-primary  hover:border-primary w-fit  " >{buttonText?  buttonText:"Get Instant Quote"}</HomeThreeBannerLink>: null} 

            </div>

        </section>
    )
}
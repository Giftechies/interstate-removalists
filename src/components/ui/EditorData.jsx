import HomeThreeBannerLink from "@/pages/home-three/HomeThreeBannerLink";



export default function EditorData ({content='',buttonText="", show_button=true}) {
    
    return(
        <section className="Editorspy80px ">
            <div className="container text-center " >
                <div className="editor " dangerouslySetInnerHTML={{__html:content}}  />
                    { show_button ? <HomeThreeBannerLink href="/pick-details" className=" test mx-auto bg-prim rounded-full text-white-1    hover:bg-transparent hover:text-primary  hover:border-primary w-fit mt-8 " >{buttonText?  buttonText:"Get  Instant Quote"}</HomeThreeBannerLink>: null} 

            </div>

        </section>
    )
}
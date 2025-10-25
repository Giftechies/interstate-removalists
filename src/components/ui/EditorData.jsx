


export default function EditorData ({content='' }){
    return(
        <section className="spy80px ">
            <div className="container" >
                <div className="editor " dangerouslySetInnerHTML={{__html:content}}  />

            </div>

        </section>
    )
}
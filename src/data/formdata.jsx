
const base_url ="https://checkdemo.live/movers/public"

export  async function fetchPropertyData(){
    try {
        const res = await fetch(`${base_url}/api/property-types`,{
            method:'GET' , cache:"no-cache"
        })

        const data = await res.json()
        console.log("propert>> fetch",data);
        
        return data
        
        
    } catch (error) {
         console.log(error)
        
    }

}
 
export async function fetchVaritions(){
    try {
        const res = await fetch(`${base_url}/api/variations`,{
            method:"GET", cache:"no-cache"
        })
        const data = res.json()
        return data
    } catch (error) {
         console.log(error)
        
    }
}

export async function  fetchinventory(){
    try {
        const res = await fetch(`${base_url}/api/categories`,{
            method:'GET', cache:"no-cache"
        })
        const data = await res.json()
        return data
        
        
    } catch (error) {
         console.log(error)
        
    }
}

export async function faqsData(){
    try {
        const res = await fetch(`${base_url}/api/faqs`,{
            method:'GET', cache:"no-cache"
        })
        const data = await res.json()
        return data 
    } catch(error){
         console.log( "faq", error)
    }
}


export async function pagesData(id) {
    try {
        const res = await fetch(` ${base_url}/api/pages/${id} `,{
            method:"GET",cache:"no-cache"
        })
        const result = await res.json()
        return result
    } catch (error) {
        console.log(error);
       const data={data:"Something went wrong!! Please try again later.",success:false}
        return data 
        
    }
    
}
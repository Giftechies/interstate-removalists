import { Award } from "lucide-react";


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
        alert(error)
        
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
        alert(error)
        
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
        alert(error)
        
    }
}
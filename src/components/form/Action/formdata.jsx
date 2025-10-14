

const base_url ="https://checkdemo.live/movers/public"

export  async function PropertyData(){
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
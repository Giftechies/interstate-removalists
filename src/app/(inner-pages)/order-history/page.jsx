import { Orders } from "@/data/formdata"
import Banner from "../../../components/ui/InnerBanner"
import UserProfile from "@/components/profile/UserProfile"
import { cookies } from "next/headers"


export default async function (){
const Cookiestore = cookies()

const token = Cookiestore.get("authToken")?.value
   
    const res = await Orders(token)
    console.log(res,"order>>>");
    
        const order = res.data.data
    return(
        <>
        <Banner pagename={"Profile"} /> 
        <UserProfile order={order} />
        
        </>
    )
}
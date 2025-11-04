import { Orders } from "@/data/formdata"
import Banner from "../../../components/ui/InnerBanner"
import UserProfile from "@/components/profile/UserProfile"


export default async function (){
    const res = await Orders()
        const order = res.data.data
    return(
        <>
        <Banner pagename={"Profile"} />
        <UserProfile order={order} />
        
        </>
    )
}
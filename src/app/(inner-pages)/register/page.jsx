import Banner from "@/components/ui/InnerBanner";
import RegisterComponent from './RegisterComponent'

export default function register(){
    return(
      <>
      <Banner
      pagename={"Register"}
      imgpath={''}
      />
      <RegisterComponent/>

      </>
    )
}
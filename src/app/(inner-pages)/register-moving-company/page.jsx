import Banner from "@/components/ui/InnerBanner";
import Registerform from './Registerform'

export default function register(){
    return(
      <>
      <Banner
      pagename={"Register Moving Company "}
      imgpath={'https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlZ2lzdHJhdGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600'}
      />
      <Registerform/>

      </>
    )
}
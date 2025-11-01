import "@/../node_modules/react-modal-video/scss/modal-video.scss";
import "@/styles/globals.css";
import { pop } from "@/utils/fonts";

import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import NavbarContainerTwo from "@/components/navbar/NavbarContainerTwo";
import Footer from "@/components/footer/Footer";
import ClientWrapper from "@/components/shared/ClientWrapper"; 
import { NavbarData } from "@/data/formdata";




export const metadata = {
  title: "Interstate Removalist",
  description: "",
  icons:{
    icon:"/favicon.png"
  }
  
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
const navBarData = await NavbarData()
// console.log("sdfsd>>>",navBarData);


  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={pop.className}>
        <ClientWrapper>
        <NavbarContainerTwo menu={navBarData} />
          <main className="relative">{children}</main>
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}

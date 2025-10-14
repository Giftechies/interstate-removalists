"use client";
import "@/../node_modules/react-modal-video/scss/modal-video.scss";
import ScrollProgressButton from "@/components/shared/scroll-top/ScrollProgressButton";
import "@/styles/globals.css";
import { kanit } from "@/utils/fonts";

import { Provider } from "react-redux";
import { store } from "./store/store";

// import type { Metadata } from "next";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import NavbarContainerTwo from "@/components/navbar/NavbarContainerTwo";
import Footer from "@/components/footer/Footer";
import { ReactLenis } from "@studio-freight/react-lenis";
import SmoothScroll from "@/components/animations/SmoothScroll";

// export const metadata: Metadata = {
//   title: "Babuz - Banking Solutions for Businesses NextJs Template",
//   description: "Banking Solutions for Businesses NextJs Template",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
   <head>
       <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
   </head>
      <body >
      <ReactLenis root options={{ SmoothScroll:true, smoothTouch:true,duration:2.5}} >
          <Provider store={store}>
          <main>
            <NavbarContainerTwo />
            <div className="relative">{children}</div>
            <Footer />

            <ScrollProgressButton />
          </main>
        </Provider>
      </ReactLenis>
      </body>
    </html>
  );
}

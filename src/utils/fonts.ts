import { Poppins } from "next/font/google";
export const pop = Poppins({
  subsets: ["latin"],
  variable: "--body-font",
  weight: ["300", "400", "500", "600", "700"],
});

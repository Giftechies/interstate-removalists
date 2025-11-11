// import dynamicImport from "next/dynamic";
import { Metadata } from "next";

export const metadata = {
  title: "Login",
  description: "",
};

// export const dynamic = "force-dynamic"; // tells Next.js not to pre-render

// // ✅ Import your client component dynamically (disable SSR)
// const LoginContent = dynamicImport(() => import("@/pages/login/LoginContent"), {
//   ssr: false,
// });

export default function LoginPage() {
  // return <LoginContent />;
  return <h1>login page</h1>;
}

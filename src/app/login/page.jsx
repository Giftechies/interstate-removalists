import dynamicImport from "next/dynamic";
import LoginContent from "@/components/login-components/LoginContent"


export const metadata = {
  title: "Login",
  description: "",
};

export const dynamic = "force-dynamic"; // tells Next.js not to pre-render


export default function LoginPage() {
  return <LoginContent />;

}

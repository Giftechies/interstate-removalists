import dynamicImport from "next/dynamic";
import LoginContent from "@/components/login-components/LoginContent"


export const metadata = {
  title: "Login",
  description: "",
};

export default function LoginPage() {
  return <LoginContent />;

}

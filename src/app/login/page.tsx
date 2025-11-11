import { Metadata } from "next";
import dynamic from "next/dynamic";

const LoginContent = dynamic(()=>import("@/pages/login/LoginContent"))

export const metadata: Metadata = {
  title: "Login ",
  description: "",
};

const Login = () => {
//  return <div className="mt-32">hello</div>
  return <LoginContent />;
};

export default Login;

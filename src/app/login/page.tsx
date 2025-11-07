import LoginContent from "@/pages/login/LoginContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login ",
  description: "",
};

const Login = () => {
//  return <div className="mt-32">hello</div>
  return <LoginContent />;
};

export default Login;

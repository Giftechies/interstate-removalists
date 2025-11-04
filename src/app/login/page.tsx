import LoginContent from "@/pages/login/LoginContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login ",
  description: "",
};

const Login = () => {
  return <LoginContent />;
};

export default Login;

import element from "@/../public/images/home-one/footer-crown.png";
import loginImage from "@/../public/img/innerimg/localimg.png";
import Image from "next/image";
import Link from "next/link";

const LoginContent = () => {




  return (
    <div className="relative h-screen grid-cols-12 items-center justify-center gap-6 lg:grid xxl:overflow-hidden">
      <div className="col-start-1 col-end-7">
        <Image
          src={loginImage}
          width={948}
          height={1080}
          alt="Login Image"
          className="xxl:max-h-screen"
        />
      </div>
      <div className="col-start-7 col-end-12 max-lg:px-4 max-lg:py-8 xl:col-start-8 ">
        <div className="items-center justify-center">
          <div>
            <h5 className="h5 mt-6 text-center font-medium">
              Login to Your Account
            </h5>
          </div>
          <form className="smt40px flex flex-col ">
            <input
              type="text"
              placeholder="Username"
              className="formInput"
            />
            <input
              type="password"
              placeholder="Password"
              className="formInput mt-8"
            />
            <div className="s-text mt-3 flex items-center justify-end hover:text-[var(--primary-hex)] gap-6 text-black-3">
              <Link href={`/#`}>Forgot Password?</Link>
            </div>
            <button className="h6 smb32px smt32px w-full bg-prim py-3 text-center text-white-1 hover:text-[var(--primary-hex)] hover:bg-white-1 hover:border-[var(--primary-hex)] ">
              Login
            </button>
          </form>
        </div>
      </div>
      <Image
        src={element}
        width={222}
        height={214}
        alt="Element"
        className="absolute bottom-0 right-0 max-3xl:hidden"
      />
    </div>
  );
};

export default LoginContent;

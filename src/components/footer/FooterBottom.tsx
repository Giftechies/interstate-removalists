import { IconSend } from "@tabler/icons-react";
import Link from "next/link";

const FooterBottom = () => {
  return (
    <div className="spy32px flex items-center justify-between border-t border-black-2 max-md:flex-col-reverse max-md:gap-5">
      <div className="flex items-center gap-2 max-[380px]:flex-col min-[380px]:gap-3">
        <p className="m-text text-white-1">
          Copyright @ {new Date().getFullYear()} BabuZ
        </p>
        <div className="bg-black-3 max-[380px]:h-px max-[380px]:w-20 min-[380px]:h-4 min-[380px]:w-px"></div>
        <p className="m-text">
          Designed By{" "}
          <Link className="hover:text-accent-3" href={`/`}>
            Pixelaxis
          </Link>
        </p>
      </div>
      <div className="me-6 flex bg-accent-1 py-1 pr-1 ps-5 min-[1500px]:w-[526px]">
        <input
          type="text"
          className="w-full bg-inherit outline-none placeholder:text-white-3"
          placeholder="Enter Your Email"
        />
        <div className="bg-black-4 p-3">
          <IconSend />
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;

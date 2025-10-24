// import logo from "/img/logo/whiteLogo.svg";
import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitch,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const FooterLeftColumn = () => {
  return (
    <div className="flex-1">
    <Link href={"/"} className="inline-block">
      <Image src={'/img/logo/whiteLogo.svg'} width={230} height={80} alt="Footer Logo" />
    </Link>

      <div className="smt40px flex items-center gap-3">
        <Link
          href={`/`}
          className="theme-transition-3 rounded-xl bg-primary p-2 hover:bg-white-1 hover:text-primary"
        >
          <IconBrandFacebook />
        </Link>
        <Link
          href={`/`}
          className="theme-transition-3 rounded-xl   bg-primary p-2 hover:bg-white-1 hover:text-primary"
          >
          <IconBrandInstagram />
        </Link>
        <Link
          href={`/`}
          className="theme-transition-3 rounded-xl   bg-primary p-2 hover:bg-white-1 hover:text-primary"
          >
          <IconBrandYoutube />
        </Link>
      
        
      </div>
    </div>
  );
};

export default FooterLeftColumn;

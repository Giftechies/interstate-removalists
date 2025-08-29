import logo from "@/../public/img/logo/interstate logo v4-01.png";
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
      <Image src={logo} width={416} height={80} alt="Footer Logo" />
      <p className="m-text text-balance text-white-3">
     
      </p>
      <div className="smt40px flex items-center gap-3">
        <Link
          href={`/`}
          className="theme-transition-3 rounded-xl bg-black-2 p-2 hover:bg-primary"
        >
          <IconBrandFacebook />
        </Link>
        <Link
          href={`/`}
          className="theme-transition-3 rounded-xl bg-black-2 p-2 hover:bg-primary"
        >
          <IconBrandTwitch />
        </Link>
        <Link
          href={`/`}
          className="theme-transition-3 rounded-xl bg-black-2 p-2 hover:bg-primary"
        >
          <IconBrandInstagram />
        </Link>
        <Link
          href={`/`}
          className="theme-transition-3 rounded-xl bg-black-2 p-2 hover:bg-primary"
        >
          <IconBrandDiscord />
        </Link>
        <Link
          href={`/`}
          className="theme-transition-3 rounded-xl bg-black-2 p-2 hover:bg-primary"
        >
          <IconBrandYoutube />
        </Link>
      </div>
    </div>
  );
};

export default FooterLeftColumn;

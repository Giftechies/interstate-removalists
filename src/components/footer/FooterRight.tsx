import { IconMapPin,IconPhoneCall,IconMail
 } from "@tabler/icons-react";
import { MapIcon } from "lucide-react";
import Link from "next/link";

const FooterRight = () => {
  return (
    <div className="flex-1">
      <h5 className="h3 font-medium">Contact Us</h5>
      <p className="m-text spt32px text-white-3  hover:text-prim  flex items-start gap-4 ">
        <IconMapPin className=" size-8 " />
        Valentin, Street Road 27, New <br />
        York. USA - 752252
      </p>
      <Link
        href="tel:+3567897483"
        className="spt24px xl-text  text-white-3  hover:text-prim   flex gap-4 "
      >
       <IconPhoneCall/> (303) 555-0105 
      </Link>
      <Link
        href="mailto:info@gmail.com"
        className="m-text mt-3 text-white-3 hover:text-prim flex  gap-4 "
      >
        <IconMail />

        info@gmail.com
      </Link>
    </div>
  );
};

export default FooterRight;

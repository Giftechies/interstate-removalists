import Link from "next/link";

const FooterRight = () => {
  return (
    <div className="flex-1">
      <h5 className="h3 font-medium">Contact Us</h5>
      <p className="m-text spt32px text-white-3">
        Valentin, Street Road 27, New <br />
        York. USA - 752252
      </p>
      <Link
        href="tel:+3567897483"
        className="spt24px xl-text block text-white-3 underline underline-offset-4"
      >
        (303) 555-0105 
      </Link>
      <Link
        href="mailto:info@gmail.com"
        className="m-text mt-3 block text-white-3"
      >
        info@gmail.com
      </Link>
    </div>
  );
};

export default FooterRight;

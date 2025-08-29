import RoundedLink from "../link/RoundedLink";

const FooterSideSection = () => {
  return (
    <div className="xxl:spt120px flex flex-col items-center gap-10 bg-accent-1 px-10 text-center max-xxl:justify-between max-xxl:py-6 lg:gap-15 lg:max-xxl:flex-row xxl:w-[508px] xxl:px-25 xxl:pb-8">
      <h5 className="h3 font-semibold">Have a Project in Your Mind?</h5>
      <RoundedLink
        buttonText="Contact Us"
        className="text-white-1 hover:text-black-4 lg:max-xxl:order-3 xxl:size-[180px]"
        link="/contact"
      />
      <div className="flex flex-col items-center">
        <p className="xl-text font-medium">09 : 00 AM - 10 : 30 PM</p>
        <p className="m-text font-medium">Saturday - Thursday</p>
      </div>
    </div>
  );
};

export default FooterSideSection;

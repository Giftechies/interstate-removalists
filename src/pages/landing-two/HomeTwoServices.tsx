import serviceAnimal from "@/../public/images/home-two/service-animale.png";
import serviceCoin from "@/../public/images/home-two/service-coins.png";
import LInkArrowTwo from "@/components/link/LInkArrowTwo";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import {
  IconDiscountCheck,
  IconPresentation,
  IconRoute,
  IconUsers,
} from "@tabler/icons-react";
import Image from "next/image";
import HomeTwoServiceCard from "./HomeTwoServiceCard";

const HomeTwoServices = () => {
  return (
    <section className="fade-wrapper relative z-10 bg-primary text-white-1 after:bottom-0 after:right-0 after:-z-10 after:h-full after:w-1/2 after:bg-accent-4  lg:after:absolute">
      <div className="max-lg:spy120px container relative grid grid-cols-12 items-center">
        <div className="col-start-1 col-end-13 lg:col-end-6">
          <SectionSubTitle text="Services" className="text-white-1" />
          <SectionTitle text="Our Featured Services." className="h2 mt-3" />
          <SectionText
            text="Integrate Babuz on your web-site to offer fast, secure and seamless online bank transfer payment method."
            className="fade-top mt-5 text-white-2"
          />
          <SectionText
            text="You could receive payments straight into your company bank account or open a Babuz merchant account and collect funds there."
            className="fade-top fade-top mt-4 text-white-2"
          />
          <div className="spt40px">
            <LInkArrowTwo linkText="All Services" link="/services" />
          </div>
        </div>
        <div className="max-lg:spt40px col-start-1 col-end-13 grid max-lg:gap-3 rounded-sm overflow-hidden xs:grid-cols-2 lg:col-start-7">
          <HomeTwoServiceCard
            icon={<IconPresentation className="size-10" />}
            title="Boost your Payments"
            text="Reduced Payments maintenance and processing fees. No hidden fees."
            className="max-lg:bg-accent-4"
          />
          <HomeTwoServiceCard
            icon={<IconUsers className="size-10" />}
            title="Agent Banking"
            text="Stay updated. check your bank account to manage funds and track transactions securely."
            className="bg-accent-4 lg:bg-primary/20"
          />
          <HomeTwoServiceCard
            icon={<IconDiscountCheck className="size-10" />}
            title="Savings Account"
            text="Reduced Payments maintenance and processing fees. No hidden fees."
            className="bg-accent-4 lg:bg-primary/20"
          />
          <HomeTwoServiceCard
            icon={<IconRoute className="size-10" />}
            title="Pay Out & Refund"
            text="Execute pay outs and refunds straight to your customer’s bank account via BabuZ."
            className="max-lg:bg-accent-4 "
          />
        </div>
      </div>
      <Image
        src={serviceAnimal}
        width={220}
        height={212}
        alt="Service animal"
        className="absolute bottom-0 left-0 max-3xl:w-30 max-sm:hidden"
      />
      <Image
        src={serviceCoin}
        width={208}
        height={193}
        alt="Service animal"
        className="absolute bottom-0 right-0 max-3xl:w-30 max-sm:hidden"
      />
    </section>
  );
};

export default HomeTwoServices;

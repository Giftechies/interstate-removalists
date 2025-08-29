import loan1 from "@/../public/images/loan-1.png";
import loan2 from "@/../public/images/loan-2.png";
import loan3 from "@/../public/images/loan-3.png";
import loan4 from "@/../public/images/loan-4.png";
import loan5 from "@/../public/images/loan-5.png";
import loan6 from "@/../public/images/loan-6.png";
import RoundedLink from "@/components/link/RoundedLink";
import Pagination from "@/components/shared/Pagination";
import Image from "next/image";

const LoanContent = () => {
  return (
    <section className="spy120px relative" id="scrollPosition">
      <div className="container">
        <div className="grid items-center gap-6 max-sm:justify-center sm:grid-cols-3">
          <div className="flex w-fit flex-col gap-6">
            <div className="group theme-transition-3 relative">
              <Image
                src={loan1}
                width={416}
                height={425}
                alt="loan image one"
              />
              <div className="rounded-16px theme-transition-4 absolute bottom-0 left-0 flex h-0 w-full items-center justify-center gap-6 bg-[linear-gradient(0deg,#005655_0%,rgba(9,91,90,0.20)_100%)] opacity-0 group-hover:visible group-hover:h-full group-hover:opacity-100 max-sm:flex-col-reverse  sm:flex-col xxl:gap-8">
                <RoundedLink
                  buttonText="View Details"
                  link="/education-loan"
                  className="border-primary bg-primary text-white-1 hover:border-accent-3 hover:bg-transparent hover:text-black-4"
                />
                <p className="h3 font-medium text-white-1">Education Loan</p>
              </div>
            </div>
            <div className="group theme-transition-3 relative">
              <Image
                src={loan2}
                width={416}
                height={278}
                alt="loan image two"
              />
              <div className="rounded-16px theme-transition-4 absolute bottom-0 left-0 flex h-0 w-full items-center justify-center gap-6 bg-[linear-gradient(0deg,#005655_0%,rgba(9,91,90,0.20)_100%)] opacity-0 group-hover:visible group-hover:h-full group-hover:opacity-100 max-sm:flex-col-reverse  sm:flex-col xxl:gap-8">
                <RoundedLink
                  buttonText="View Details"
                  link="/business-loan"
                  className="border-primary bg-primary text-white-1 hover:border-accent-3 hover:bg-transparent hover:text-black-4"
                />
                <p className="h3 font-medium text-white-1">Business Loan</p>
              </div>
            </div>
          </div>
          <div className="flex w-fit flex-col gap-6">
            <div className="group theme-transition-3 relative">
              <Image
                src={loan3}
                width={416}
                height={300}
                alt="loan image three"
              />
              <div className="rounded-16px theme-transition-4 absolute bottom-0 left-0 flex h-0 w-full items-center justify-center gap-6 bg-[linear-gradient(0deg,#005655_0%,rgba(9,91,90,0.20)_100%)] opacity-0 group-hover:visible group-hover:h-full group-hover:opacity-100 max-sm:flex-col-reverse sm:flex-col xxl:gap-8">
                <RoundedLink
                  buttonText="View Details"
                  link="/car-loan"
                  className="border-primary bg-primary text-white-1 hover:border-accent-3 hover:bg-transparent hover:text-black-4"
                />
                <p className="h3 font-medium text-white-1">Car Loan</p>
              </div>
            </div>
            <div className="group theme-transition-3 relative">
              <Image
                src={loan4}
                width={416}
                height={403}
                alt="loan image four"
              />
              <div className="rounded-16px theme-transition-4 absolute bottom-0 left-0 flex h-0 w-full items-center justify-center gap-6 bg-[linear-gradient(0deg,#005655_0%,rgba(9,91,90,0.20)_100%)] opacity-0 group-hover:visible group-hover:h-full group-hover:opacity-100 max-sm:flex-col-reverse sm:flex-col xxl:gap-8">
                <RoundedLink
                  buttonText="View Details"
                  link="/home-loan"
                  className="border-primary bg-primary text-white-1 hover:border-accent-3 hover:bg-transparent hover:text-black-4"
                />
                <p className="h3 font-medium text-white-1">Home Loan</p>
              </div>
            </div>
          </div>
          <div className="flex w-fit flex-col gap-6">
            <div className="group theme-transition-3 relative">
              <Image
                src={loan5}
                width={416}
                height={195}
                alt="loan image five"
              />
              <div className="rounded-16px theme-transition-4 absolute bottom-0 left-0 flex h-0 w-full items-center justify-center gap-6 bg-[linear-gradient(0deg,#005655_0%,rgba(9,91,90,0.20)_100%)] opacity-0 group-hover:visible group-hover:h-full group-hover:opacity-100 max-sm:flex-col-reverse sm:flex-col xxl:gap-8">
                <RoundedLink
                  buttonText="View Details"
                  link="/personal-loan"
                  className="border-primary bg-primary text-white-1 hover:border-accent-3 hover:bg-transparent hover:text-black-4"
                />
                <p className="h3 font-medium text-white-1">Personal Loan</p>
              </div>
            </div>
            <div className="group theme-transition-3 relative">
              <Image
                src={loan6}
                width={416}
                height={508}
                alt="loan image six"
              />
              <div className="rounded-16px theme-transition-4 absolute bottom-0 left-0 flex h-0 w-full items-center justify-center gap-6 bg-[linear-gradient(0deg,#005655_0%,rgba(9,91,90,0.20)_100%)] opacity-0 group-hover:visible group-hover:h-full group-hover:opacity-100 max-sm:flex-col-reverse  sm:flex-col xxl:gap-8">
                <RoundedLink
                  buttonText="Contact"
                  link="/business-loan"
                  className="border-primary bg-primary text-white-1 hover:border-accent-3 hover:bg-transparent  hover:text-black-4"
                />
                <p className="h3 font-medium text-white-1">Business Loan</p>
              </div>
            </div>
          </div>
        </div>
        <Pagination />
      </div>
    </section>
  );
};

export default LoanContent;


import OurWorkCard from '@/pages/home-three/OurWorkCard'
import SectionTitle from "@/components/shared/SectionTitle";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
// import Service from "@/../../public/img/svg/customer-service.svg"

const steps = [
  {
    step: "01",
    heading: "Tell Us What You’re Moving",
    iconname: '/img/svg/quote.png',
    text: "Pop in your pickup and drop-off details, and let us know what needs shifting. We’ll line up removalists who are right for your move."
  },
  {
    step: "02",
    heading: "Compare and Choose",
    iconname: "/img/svg/customer.png",
    text: "You’ll get a few clear quotes from trusted movers near you. Check what’s included, compare prices, and pick the one that fits your plan."

  },
  {
    step: "03",
    heading: "Book and Relax",
    iconname: "/img/svg/box-carring.png",
    text: "Once you book, your mover takes over. They’ll confirm times, handle the loading, and keep you in the loop along the way."
  },
  {
    step: "04",
    heading: "Delivery Done Properly",
    iconname: "/img/svg/setting.png",
    text: "Every item arrives safely at your new place. The team unloads, puts things where you need them, and checks you’re happy before they roll out."
  },
];

export default function OurWorks() {
  return (
    <section className="spy120px  bg-zinc-200 fade-wrapper relative overflow-hidden">
      <div className="container  flex flex-col items-center justify-center ">
        <SectionSubTitle
        text="OUR WORK PROCESS"
        className=" text-black-2"
        />
        <SectionTitle
        text="Reliable moving services built around you"
        className="  w-[70%] text-center mt-3 text-black capitalize "
        />
      <div className="grid grid-cols-1  lg:grid-cols-4 md:grid-cols-2   space-y-8 items-center justify-center">
          {steps.map((item, index) => (
         <div key={index} className={` `}>
             <OurWorkCard
            key={index}
            step={item.step}
            heading={item.heading}
            iconname={item.iconname}
            text={item.text}
            className={`  ${index % 2 === 0? "":"lg:mt-15"} ` }
          />
         </div>
        ))}
      </div>
      </div>
    </section>
  );
}

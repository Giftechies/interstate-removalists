import ButtonSlider from "@/components/buttons/ButtonSlider";
import BorderVerticalThree from "@/components/shared/BorderVerticalThree";
import {
  IconQuote,
  IconStarFilled,
  IconStarHalfFilled,
} from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: string;
  text: string;
  name: string;
  title: string;
};

const HomeOneTestimonialCard = ({ image, text, name, title }: Props) => {
  return (
    <div className="appear-down  w-[350px] flex items-center  flex-col gap-6 ">
      <div className="relative shrink-0">
        <Image
          src={image}
          width={200}
          height={200}
          alt="Testimonial image"
          className="rounded-full w-[150px]  aspect-square object-cover object-center "
        />
        <div className="absolute -right-12 top-[65px] flex size-20 items-center justify-center rounded-full border-[6px] border-white-1 bg-accent-4">
          <IconQuote size={30} className="text-primary" />
        </div>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between ">
         <div className=" flex items-center gap-1 w-30 " >
           <IconStarFilled className="text-accent-3" />
          <IconStarFilled className="text-accent-3" />
          <IconStarFilled className="text-accent-3" />
          <IconStarFilled className="text-accent-3" />
          <IconStarHalfFilled className="text-accent-3" />
         </div>

           <div>
            <p className="h5 font-medium">{name}</p>
            <p className="m-text mt-1 font-medium text-black-1">{title}</p>
          </div>
        </div>

        <BorderVerticalThree className=" my-4 " />
        <p className="h6  shrink-0 text-black-1 text-center ">{text}</p>
      </div>
    </div>
  );
};

export default HomeOneTestimonialCard;

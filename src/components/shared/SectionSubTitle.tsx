import { cn } from "@/utils/cn";

const SectionSubTitle = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <h5
      className={cn(
        "subtitle title-animation font-medium capitalize text-prim",
        className,
      )}
    >
      {text}
    </h5>
  );
};

export default SectionSubTitle;

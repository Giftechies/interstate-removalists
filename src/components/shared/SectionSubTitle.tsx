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
        "h5 title-animation font-medium capitalize text-primary",
        className,
      )}
    >
      {text}
    </h5>
  );
};

export default SectionSubTitle;

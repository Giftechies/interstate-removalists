import { cn } from "@/utils/cn";

const SectionText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <p className={cn("m-text text-black-3", className)}>{text}</p>;
};

export default SectionText;

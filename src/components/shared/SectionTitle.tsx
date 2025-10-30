import { cn } from "@/utils/cn";

const SectionTitle = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <h3 className={cn("h2 capitalize mt-3 ", className)}>
      {text}
    </h3>
  );
};

export default SectionTitle;

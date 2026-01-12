import { cn } from "@/utils/cn";
import { IconArrowRight } from "@tabler/icons-react";
import { MoveRight } from "lucide-react";


/**
 * Button component for primary action (replica of LinkPrimary)
 */

type ButtonPrimaryProps = {
  className?: string;
  text: string;
  onClick?: () => void;
};

const ButtonPrimary = ({
  className,
  text,
  onClick,
}: ButtonPrimaryProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={cn(
        " l-text group relative inline-flex items-center justify-center bg-prim overflow-hidden px-7 py-2 text-white-4 shadow-md  theme-transition-3 ",
        className,
      )}
    >
      {/* Arrow slide in */}
      <span className="text-white ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-prim duration-300 group-hover:translate-x-0">
        <MoveRight />
      </span>

      {/* Text slide out */}
      <span className="ease  l-text absolute flex gap-2 h-full w-full transform items-center justify-center text-white-4 transition-all duration-300 group-hover:translate-x-full">
        {text} <MoveRight size={20} />
      </span>

      {/* Invisible placeholder to preserve button width */}
      <span className="l-text invisible relative">{text}</span>
    </button>
  );
};

export default ButtonPrimary;

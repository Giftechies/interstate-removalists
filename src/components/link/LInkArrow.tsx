import { cn } from "@/utils/cn";
import Link from "next/link";

const LInkArrow = ({
  linkText,
  link,
  className,
  roundClassName,
}: {
  linkText: string;
  link: string;
  className?: string;
  roundClassName?: string;
}) => {
  return (
    <Link
      href={`${link}`}
      className={cn(
        "group flex items-center gap-16 hover:text-secondary",
        className,
      )}
    >
      <span>{linkText}</span>

      <span className="relative flex items-center">
        <svg
          className="theme-transition-3 absolute -left-8 "
          xmlns="http://www.w3.org/2000/svg"
          width="58"
          height="16"
          viewBox="0 0 58 16"
          fill="none"
        >
          <path
            d="M57.7071 8.70711C58.0976 8.31659 58.0976 7.68342 57.7071 7.2929L51.3431 0.928937C50.9526 0.538412 50.3195 0.538412 49.9289 0.928937C49.5384 1.31946 49.5384 1.95263 49.9289 2.34315L55.5858 8L49.9289 13.6569C49.5384 14.0474 49.5384 14.6805 49.9289 15.0711C50.3195 15.4616 50.9526 15.4616 51.3431 15.0711L57.7071 8.70711ZM-8.74228e-08 9L57 9L57 7L8.74228e-08 7L-8.74228e-08 9Z"
            className="theme-transition-3 fill-black-1 group-hover:fill-secondary"
          />
        </svg>
        <span
          className={cn(
            "block size-12 rounded-full border border-black-1 group-hover:border-secondary",
            roundClassName,
          )}
        ></span>
      </span>
    </Link>
  );
};

export default LInkArrow;

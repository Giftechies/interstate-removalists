import SectionText from "@/components/shared/SectionText";
import { cn } from "@/utils/cn";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ✅ Safe HTML stripper (works both client + server)
const stripHtml = (html) => {
  if (!html) return "";
  // On server (no DOMParser available)
  if (typeof window === "undefined") {
    return html.replace(/<[^>]*>/g, " ");
  }
  // On client
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

const HomeOneFinancialCard = ({
  handleHover,
  isHover,
  index,
  image,
  description = "Nothing",
  title = "",
  slug = "",
}) => {
  // ✅ Handle image fallback
  const fallbackImage = "/images/home-one/finance-planning-1.png";
  const validImage =
    image && typeof image === "string" && image.trim() !== ""
      ? image
      : fallbackImage;

  // ✅ Strip HTML + truncate
  const cleanText = stripHtml(description);
  const shortDescription =
    cleanText.length > 180 ? cleanText.slice(0, 180) + "..." : cleanText;

  return (
    <div
      onMouseEnter={() => handleHover(index)}
      className={cn(
        "sp32px till-card group theme-transition-3 bg-white-1 shadow-custom1 hover:bg-sec",
        {
          "shadow-[0px_4px_53px_0px_rgba(103,103,103,0.25)]": isHover === index,
        },
      )}
    >
      {/* ✅ Image with safe fallback */}
    {/* <Link  href={`/services/${slug}`} >
      <div className="theme-transition-3 size-20 rounded-full overflow-hidden group-hover:bg-white-1 bg-gray-300">
        <Image
          src={validImage}
          alt={title || "Service Image"}
          width={400}
          height={250}
          className="object-contain object-center size-full"
        />
      </div></Link> */}

      {/* ✅ Title */}
      <Link
        href={`/services/${slug}`}
        className="h5 theme-transition-3 mt-6 block font-medium group-hover:text-white-1"
      >
        {title}
      </Link>

      {/* ✅ Truncated + sanitized text */}
      <SectionText
        className="theme-transition-3 my-3 text-justify group-hover:text-white-1"
        text={shortDescription}
      />
      <hr  />
      <Link    href={`/services/${slug}`} className=" flex items-center gap-2 group-hover:text-white-1  " >Read More  <MoveRight className="mt-1" /> </Link>
    </div>
  );
};

export default HomeOneFinancialCard;

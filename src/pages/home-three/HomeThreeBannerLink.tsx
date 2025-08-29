import { ReactNode } from 'react';
import { IconArrowUpRight } from '@tabler/icons-react';
import Link from 'next/link';
import { cn } from '@/utils/cn';

type HomeThreeBannerLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

const HomeThreeBannerLink: React.FC<HomeThreeBannerLinkProps> = ({ href, children, className }) => {
  return (
    <Link
      href={`${href}`}
      className={cn("spx24px l-text theme-transition-3 flex items-center gap-3 border border-accent-3 bg-transparent py-3 hover:text-black-4 font-medium hover:bg-accent-3", className)}
    >
      {children}
      <IconArrowUpRight />
    </Link>
  );
};

export default HomeThreeBannerLink;

"use client";
import { IconArrowDown, IconChevronsRight } from "@tabler/icons-react";
import Link from "next/link";
import Lines from "./Lines";

type Props = {
  pageName: string;
  pageLink: string;
};

const Breadcrumbs = ({ pageName, pageLink }: Props) => {
  return (
    <section className=" relative overflow-hidden  ">
      <div className="container pb-4">
       
         
           
            <div className="xl-text  flex items-center gap-2">
              <span className= " text-[var(--primary)] xl-text ">Here you are: </span><Link href={`/`}>Home</Link>
              <IconChevronsRight />
              <Link href={`${pageLink}`} className="capitalize text-zinc-400">
                {pageName}
              </Link>
            </div>
         

         
       
      </div>
    </section>
  );
};

export default Breadcrumbs;

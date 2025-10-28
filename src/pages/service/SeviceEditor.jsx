import Link from "next/link";
import HomeThreeBannerLink from "../home-three/HomeThreeBannerLink";

export default function ServiceEditor({ params, res = [], services = {} }) {
  return (
    <section className="spy80px  ">
      <div className="container grid grid-cols-12 gap-6">
        <div className=" col-span-9 ">
          <div
            className="editor "
            dangerouslySetInnerHTML={{ __html: services?.description }}
          />
          {/* <HomeThreeBannerLink href="/pick-details" className="  mx-auto bg-prim rounded-full text-white-1    hover:bg-transparent hover:text-primary  hover:border-primary w-fit mt-6 " >Get Instant Quote</HomeThreeBannerLink> */}
        </div>
        {/* sidebar */}
        <div className="  relative col-span-3  ">
          
          <div className="  sticky top-20 h-fit w-full rounded-lg border bg-gray-100 p-6 py-2 shadow-lg ">
            <h3 className=" mb-4 text-center text-xl font-semibold text-[var(--primary-hex)] ">
              Other Services
            </h3>
            <div
              data-lenis-prevent
              className=" navbar-dropdown-scrollbar flex h-80 flex-col items-center gap-3  overflow-auto  "
            >
              {res?.data?.map((item) => {
                const IsActive = item?.slug === params?.page;
                return (
                  <Link
                    key={item.id}
                    href={`/services/${item.slug}`}
                    className={`  ${IsActive ? "font-medium  text-[var(--primary-hex)]" : "text-gray-700"}  hover:text-[var(--primary-hex)]   `}
                  >
                    {item?.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

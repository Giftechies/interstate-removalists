import blogImage1 from "@/../public/images/home-one/home-one-recent-blog-1.png";
import blogImage2 from "@/../public/images/home-one/home-one-recent-blog-2.png";
import RoundedLink from "@/components/link/RoundedLink";
import Lines from "@/components/shared/Lines";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import HomeOneSingleBlog from "./HomeOneSingleBlog";

const HomeOneRecentBlog = () => {
  return (
    <section className="spy120px fade-wrapper relative overflow-hidden">
      <div className="container">
        <div className="flex justify-between gap-4 max-md:flex-col md:items-center md:gap-6">
          <div>
            <SectionSubTitle text="Recent Blog" />
            <SectionTitle
              text="Read update Journal"
              className="mt-5 max-w-[335px]"
            />
          </div>
          <SectionText
            text="Read our blog and try to see
            passion liesin making everything
            accessible andaesthetic for everyone."
            className="max-w-[306px] text-balance"
          />
        </div>
        <div className="spt60px grid  items-center gap-6 xl:grid-cols-2">
          <HomeOneSingleBlog
            image={'https://plus.unsplash.com/premium_photo-1664366737698-3a98169201c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmx8ZW58MHx8MHx8fDA%3D'}
            date="Latest News December 12, 2022"
            title="The future of fraud protection."
            text="Morbi eget venenatis lorem, id viverra massa. Etiam congue efficitur velit vel pharetra."
            link="/blog-details"
          />
          <HomeOneSingleBlog
            image={"https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"}
            date="Latest News December 12, 2022"
            title="Digital Banking Services "
            text="Morbi eget venenatis lorem, id viverra massa. Etiam congue efficitur velit vel pharetra."
            link="/blog-details"
          />
        </div>
        <div className="spt60px flex items-center justify-center">
          <RoundedLink buttonText="All Blog" link="/blogs" />
        </div>
      </div>
      <Lines />
    </section>
  );
};

export default HomeOneRecentBlog;

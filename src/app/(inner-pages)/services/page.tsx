import Animations from "@/components/animations/Animations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import AboutWhyChooseUs from "@/pages/about-us/AboutWhyChooseUs";
import HomeOneService from "@/pages/home-one/HomeOneService";
import HomeOneTestimonials from "@/pages/home-one/HomeOneTestimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function Services() {
  return (
    <div>
      <Breadcrumbs pageLink="/services" pageName="Services" />
      <AboutWhyChooseUs />
      <HomeOneService />
      <HomeOneTestimonials />
      <Animations />
    </div>
  );
}

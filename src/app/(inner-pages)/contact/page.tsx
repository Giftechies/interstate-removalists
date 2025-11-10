import Animations from "@/components/animations/Animations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ContactUsForm from "@/pages/contact/ContactUsForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "",
};

export default function ContactUsPage() {
  return (
    <div>
      <Breadcrumbs />
      <ContactUsForm />
      <Animations />
    </div>
  );
}

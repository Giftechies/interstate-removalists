import Animations from "@/components/animations/Animations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import TeamDetailsContent from "@/pages/team-details/TeamDetailsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Details - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function TeamDetails() {
  return (
    <div>
      <Breadcrumbs pageLink="/team-details" pageName="Team Details" />
      <TeamDetailsContent />
      <Animations />
    </div>
  );
}

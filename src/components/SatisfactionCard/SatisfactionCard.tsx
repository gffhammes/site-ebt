import { ResponsiveComponent } from "../ResponsiveComponent";
import { DesktopSatisfactionCard } from "./DesktopSatisfactionCard";
import { MobileSatisfactionCard } from "./MobileSatisfactionCard";

export interface ISatisfactionCardProps {}

export const SatisfactionCard = (props: ISatisfactionCardProps) => {
  return (
    <ResponsiveComponent
      xs={<MobileSatisfactionCard />}
      md={<DesktopSatisfactionCard />}
    />
  );
};

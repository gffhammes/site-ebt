import { ResponsiveComponent } from "../ResponsiveComponent";
import { DesktopReviewsSection } from "./DesktopReviewsSection";
import { MobileReviewsSection } from "./MobileReviewsSection";

export interface IReviewsSectionProps {}

export const ReviewsSection = (props: IReviewsSectionProps) => {
  return (
    <ResponsiveComponent
      xs={<MobileReviewsSection />}
      md={<DesktopReviewsSection />}
    />
  );
};

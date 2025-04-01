import { ResponsiveComponent } from "../ResponsiveComponent";
import { DesktopMiniCoursesSection } from "./DesktopMiniCoursesSection";
import { MobileMiniCoursesSection } from "./MobileMiniCoursesSection";

export interface IMiniCoursesSectionProps {}

export const MiniCoursesSection = (props: IMiniCoursesSectionProps) => {
  return (
    <ResponsiveComponent
      xs={<MobileMiniCoursesSection />}
      md={<DesktopMiniCoursesSection />}
    />
  );
};

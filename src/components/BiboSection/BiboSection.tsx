import { ResponsiveComponent } from "../ResponsiveComponent";
import { MobileBiboSection } from "./MobileBiboSection";
import { DesktopBiboSection } from "./DesktopBiboSection";

export interface IBiboSectionProps {}

export const BiboSection = (props: IBiboSectionProps) => {
  return (
    <ResponsiveComponent
      xs={<MobileBiboSection />}
      md={<DesktopBiboSection />}
    />
  );
};

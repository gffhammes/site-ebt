import { Box } from "@mui/material";
import { Carousel } from "../Carousel/Carousel";
import { moduleSectionData } from "./ModulesSection";
import Image from "next/image";

export interface IDesktopModulesCarouselProps {
  align?: "center" | "start";
  height?: string;
  width?: string;
}

export const DesktopModulesCarousel = ({
  align = "center",
  height = "17rem",
  width = "10rem",
}: IDesktopModulesCarouselProps) => {
  return (
    <Carousel
      autoscroll
      autoscrollOptions={{
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        stopOnFocusIn: false,
        startDelay: 0,
      }}
      options={{ align, loop: true }}
      slides={moduleSectionData.modules.map((module) => {
        return (
          <Box
            key={module.name}
            sx={{
              height,
              flex: `0 0 ${width}`,
              pl: align === "center" ? 1 : 2,
              pr: align === "center" ? 1 : 0,
            }}
          >
            <Box sx={{ position: "relative", height: "100%", width: "100%" }}>
              <Image
                unoptimized={false}
                src={module.image}
                fill
                alt="Modulo"
                objectFit="cover"
              />
            </Box>
          </Box>
        );
      })}
    />
  );
};

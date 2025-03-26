import { Box } from "@mui/material";
import { Carousel } from "../Carousel/Carousel";
import { moduleSectionData } from "./ModulesSection";
import Image from "next/image";

export interface IMobileModulesCarouselProps {
  align?: "center" | "start";
}

export const MobileModulesCarousel = ({
  align = "center",
}: IMobileModulesCarouselProps) => {
  return (
    <Carousel
      options={{ align, loop: true }}
      slides={moduleSectionData.modules.map((module, index) => {
        return (
          <Box
            key={module.name}
            sx={{
              height: "17rem",
              flex: "0 0 10rem",
              pl: 2,
            }}
          >
            <Box sx={{ position: "relative", height: "100%", width: "100%" }}>
              <Image src={module.image} fill alt="Modulo" objectFit="cover" />
            </Box>
          </Box>
        );
      })}
    />
  );
};

import { Box } from "@mui/material";
import { Carousel } from "../Carousel/Carousel";
import { moduleSectionData } from "./ModulesSection";

export interface IMobileModulesCarouselProps {}

export const MobileModulesCarousel = (props: IMobileModulesCarouselProps) => {
  return (
    <Carousel
      options={{ align: "start", loop: true }}
      slides={moduleSectionData.modules.map((module, index) => {
        return (
          <Box
            key={module.name}
            sx={{
              height: "20rem",
              flex: "0 0 10rem",
              pl: 2,
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "100%",
                backgroundColor: "red",
              }}
            ></Box>
          </Box>
        );
      })}
    />
  );
};

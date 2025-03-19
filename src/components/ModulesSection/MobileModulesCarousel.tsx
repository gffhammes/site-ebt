import { Box } from "@mui/material";
import { Carousel } from "../Carousel/Carousel";
import { moduleSectionData } from "./ModulesSection";

export interface IMobileModulesCarouselProps {}

export const MobileModulesCarousel = (props: IMobileModulesCarouselProps) => {
  return (
    <Carousel
      options={{ align: "start", loop: true }}
      slides={moduleSectionData.modules.map((module, index) => {
        const isFirstSlide = index === 0;
        const isLastSlide = index === moduleSectionData.modules.length - 1;

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

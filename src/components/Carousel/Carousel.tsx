"use client";

import { Box, SxProps } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import { ReactNode } from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoscroll from "embla-carousel-auto-scroll";

export interface ICarouselProps {
  slides: ReactNode[];
  options?: EmblaOptionsType;
  containerSx?: SxProps;
  emblaSx?: SxProps;
}

export const Carousel = ({
  slides,
  options,
  containerSx,
  emblaSx,
}: ICarouselProps) => {
  const [emblaRef] = useEmblaCarousel(
    {
      align: "start",
      skipSnaps: true,
      ...options,
    },
    [
      Autoscroll({
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        startDelay: 0,
      }),
    ]
  );

  return (
    <Box
      className="embla"
      ref={emblaRef}
      sx={{ overflow: "hidden", position: "relative", ...emblaSx }}
    >
      <Box
        className="embla__container"
        sx={{ display: "flex", ...containerSx }}
      >
        {slides}
      </Box>
    </Box>
  );
};

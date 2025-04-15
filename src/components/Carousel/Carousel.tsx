"use client";

import { Box, SxProps } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import { ReactNode } from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoscroll, { AutoScrollOptionsType } from "embla-carousel-auto-scroll";

export interface ICarouselProps {
  slides: ReactNode[];
  options?: EmblaOptionsType;
  containerSx?: SxProps;
  emblaSx?: SxProps;
  autoscroll?: boolean;
  autoscrollOptions?: AutoScrollOptionsType;
}

export const Carousel = ({
  slides,
  options,
  containerSx,
  emblaSx,
  autoscroll = false,
  autoscrollOptions,
}: ICarouselProps) => {
  const [emblaRef] = useEmblaCarousel(
    {
      align: "start",
      skipSnaps: true,
      ...options,
    },
    autoscroll ? [Autoscroll(autoscrollOptions)] : []
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

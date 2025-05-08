"use client";

import { PERIOD, scrollTo } from "@/utils/utils";
import { Box, Typography } from "@mui/material";
import { Carousel } from "./Carousel/Carousel";
import { useBreakpoint } from "@/hooks/useBreakpoint";

export interface ILaunchStripProps {}

export const LaunchStrip = (props: ILaunchStripProps) => {
  const { md } = useBreakpoint();

  if (PERIOD !== "launch") return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "black",
        zIndex: 200,
        py: 2,
      }}
      onClick={() => scrollTo("planos")}
    >
      <Carousel
        autoscroll
        options={{ loop: true, watchDrag: false }}
        autoscrollOptions={{
          startDelay: 0,
          stopOnFocusIn: false,
          stopOnInteraction: false,
          stopOnMouseEnter: false,
          playOnInit: true,
          speed: md ? 2 : 0.7,
        }}
        slides={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <Typography
            color="primary"
            key={item}
            whiteSpace="nowrap"
            sx={{ mx: 2 }}
          >
            Use o cupom <strong>EBT30</strong> para <strong>30% OFF</strong>
          </Typography>
        ))}
      />
    </Box>
  );
};

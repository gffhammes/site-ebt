"use client";

import { PERIOD } from "@/utils/utils";
import { Box, Typography } from "@mui/material";
import { Carousel } from "./Carousel/Carousel";

export interface ILaunchStripProps {}

export const LaunchStrip = (props: ILaunchStripProps) => {
  if (PERIOD !== "launch") return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "black",
        zIndex: 90,
        py: 2,
      }}
    >
      <Carousel
        autoscroll
        autoscrollOptions={{
          startDelay: 0,
          stopOnFocusIn: false,
          stopOnInteraction: false,
          stopOnMouseEnter: false,
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

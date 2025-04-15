"use client";

import { Box } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const CircleContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "0",
  transform: "translate(-37%, -50%)",
  width: "1200px",
  height: "1200px",
  zIndex: 0,
  overflow: "hidden",

  [theme.breakpoints.up("md")]: {
    width: "1409px",
    height: "1449px",
    top: "50%",
    left: "0",
  },
}));

export const OrangeCircleBackground = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <CircleContainer
      sx={{ backgroundColor: isMobile ? "white" : "transparent" }}
    >
      {!isMobile && (
        <Image
          unoptimized={false}
          src="/circle-orange.png"
          alt=""
          fill
          style={{
            objectFit: "contain",
            objectPosition: "center",
            zIndex: 1,
          }}
          priority
        />
      )}
    </CircleContainer>
  );
};

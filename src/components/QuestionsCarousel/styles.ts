"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CarouselSection = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  background: "white",
  overflow: "hidden",
  [theme.breakpoints.up("md")]: {
    padding: "80px 0",
  },
}));

export const QuestionPill = styled(Box)(({ theme }) => ({
  background: "#1E1E1E",
  color: "white",
  borderRadius: "100px",
  padding: "8px 16px",
  display: "inline-block",
  margin: "4px 8px",
  whiteSpace: "nowrap",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
    background: theme.palette.primary.main,
  },
}));

export const RowContainer = styled(Box)({
  display: "flex",
  overflow: "hidden",
  width: "100%",
  padding: "12px 0",
});


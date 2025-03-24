"use client";

import { Box } from "@mui/material";
import type React from "react";

import { ImmediateAccess } from "./immediate-access";
import { SatisfactionGuarantee } from "./satisfection-guarantee";

export const InformationSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: 3, md: 6 },
      }}
    >
      <SatisfactionGuarantee isMobile />
      <SatisfactionGuarantee />
      <ImmediateAccess />
    </Box>
  );
};

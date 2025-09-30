"use client";

import { Box } from "@mui/material";
import { ModulosSectionDesktop } from "./ModulosSectionDesktop";
import { ModulosSectionMobile } from "./ModulosSectionMobile";


export const ModulosSection = () => {
  return (
    <Box component="section" sx={{ py: 6 }}>
      {/* Versão Desktop */}
      <ModulosSectionDesktop />

      {/* Versão Mobile */}
      <ModulosSectionMobile />
    </Box>
  );
};

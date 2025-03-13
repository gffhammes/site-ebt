"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import type { ModuleList } from "@/@types/modules";

import { ModuleCard } from "./module-card";

const ScrollContainer = styled(Box)({
  overflowX: "auto",
  overflowY: "hidden",
  WebkitOverflowScrolling: "touch",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  scrollbarWidth: "none",
  width: "100%", // Ensure full width
});

interface ScrollableModuleListProps {
  modules: ModuleList;
}

export const ScrollableModuleList = ({
  modules,
}: ScrollableModuleListProps) => {
  return (
    <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>
      <ScrollContainer>
        <Box sx={{ display: "flex", gap: 2, pb: 2, width: "max-content" }}>
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              id={module.id}
              title={module.title}
              description={module.description}
              image={module.image || "/placeholder.svg"}
            />
          ))}
        </Box>
      </ScrollContainer>
    </Box>
  );
};

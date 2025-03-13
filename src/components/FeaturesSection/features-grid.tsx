"use client";

import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";

import type { ModuleList } from "@/@types/modules";
import modulesData from "@/data/modules.json";

import { ModuleGrid } from "./module-grid";
import { OrangeCircleBackground } from "./orange-circle-background";
import { ScrollableModuleList } from "./scrollable-module-list";
import { WelcomeSection } from "./welcome-section";

export const FeaturesGrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const modules: ModuleList = modulesData;

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "visible",
        color: "#fff",
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      {isMobile ? (
        <Container maxWidth="sm" sx={{ px: 2 }}>
          <Box sx={{ position: "relative", overflow: "hidden" }}>
            <OrangeCircleBackground />
            <WelcomeSection isMobile={true} />
            <ScrollableModuleList modules={modules} />
          </Box>
        </Container>
      ) : (
        <Box
          sx={{
            overflow: "visible",
            backgroundColor: "#fff",
            position: "relative",
            pt: "140px",
            pb: "200px",
          }}
        >
          <Container
            maxWidth={false}
            sx={{
              position: "relative",
              maxWidth: "1440px",
              mx: "auto",
            }}
          >
            <Grid
              container
              spacing={4}
              sx={{
                position: "relative",
                zIndex: 2,
              }}
            >
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  position: "relative",
                  minHeight: "600px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <OrangeCircleBackground />
                <WelcomeSection isMobile={false} />
              </Grid>
              <Grid item xs={12} md={6}>
                <ModuleGrid modules={modules} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </Box>
  );
};

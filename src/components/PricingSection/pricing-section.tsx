"use client";

import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type React from "react";

import pricingPlans from "@/data/pricing-plans.json";

import { PricingCardComponent } from "./pricing-card";
import { ScrollContainer } from "./styled-components";

export const PricingSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: "#1A1A1A" }}>
      <Container sx={{ px: { xs: 2, md: 3 } }}>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{
            color: "white",
            mb: { xs: 4, md: 6 },
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "5.5rem" },
          }}
        >
          Planos
        </Typography>

        {isMobile ? (
          <ScrollContainer>
            {pricingPlans.map((plan) => (
              <PricingCardComponent key={plan.id} plan={plan} />
            ))}
          </ScrollContainer>
        ) : (
          <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
            {pricingPlans.map((plan) => (
              <Box key={plan.id} sx={{ flex: 1, minWidth: 280 }}>
                <PricingCardComponent plan={plan} />
              </Box>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
};

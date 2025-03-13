import { Box, Typography } from "@mui/material";
import { Check, StarIcon, X } from "lucide-react";
import type React from "react";

import type { PricingFeature, PricingPlan } from "@/@types/pricing";
import pricingFeatures from "@/data/pricing-features.json";

import {
  FeatureItem,
  FeatureList,
  PricingCard,
  RecommendedTag,
  StyledButton,
} from "./styled-components";

interface PricingCardProps {
  plan: PricingPlan;
}

export const PricingCardComponent: React.FC<PricingCardProps> = ({ plan }) => {
  const isAnnual = plan.id === "annual";

  return (
    <PricingCard sx={{ bgcolor: plan.color }}>
      {plan.recommended && (
        <RecommendedTag
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <StarIcon /> RECOMENDADO
        </RecommendedTag>
      )}
      <Typography
        variant="h6"
        sx={{ color: "white", mb: 2, textTransform: "uppercase" }}
      >
        {plan.title}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
        <Typography
          component="span"
          sx={{ color: "white", fontSize: "1rem", mt: 1 }}
        >
          R$
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontSize: { xs: "3.5rem", md: "4rem" },
            lineHeight: 1,
            fontWeight: 700,
          }}
        >
          {plan.price}
        </Typography>
        <Typography
          component="span"
          sx={{ color: "white", fontSize: "1rem", mt: 1, ml: 1 }}
        >
          /{plan.period}
        </Typography>
      </Box>

      {plan.additionalInfo && (
        <Typography
          sx={{ color: "white", fontSize: "0.875rem", mb: 3, opacity: 0.8 }}
        >
          {plan.additionalInfo}
        </Typography>
      )}

      <FeatureList>
        {pricingFeatures.map((feature: PricingFeature, index: number) => (
          <FeatureItem key={index} isAvailable={isAnnual || feature.available}>
            {isAnnual || feature.available ? (
              <Check size={20} color="white" />
            ) : (
              <X size={20} color="white" />
            )}
            <Typography sx={{ color: "white", fontSize: "0.875rem" }}>
              {feature.text}
            </Typography>
          </FeatureItem>
        ))}
      </FeatureList>

      <StyledButton variant="contained" fullWidth>
        ASSINAR
      </StyledButton>
    </PricingCard>
  );
};

import { Box, Button, Stack, Typography } from "@mui/material";
import { IPlan } from "../PricingSection";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Fragment } from "react";
import { PricingCardPrice } from "./PricingCardPrice";
import parse from "html-react-parser";

export interface IPricingCardProps {
  plan: IPlan;
}

export const PricingCard = ({ plan }: IPricingCardProps) => {
  return (
    <Box
      sx={{
        backgroundColor: plan.isRecomended ? "primary.main" : "#8f8f8f",
        p: 2,
        pt: 3,
        borderRadius: 4,
        position: "relative",
        overflow: "visible",
        height: "100%",
        // mt: 2,
      }}
    >
      {plan.isRecomended && !plan.hideRecomendedBadge && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            zIndex: 999,
            overflow: "visible",
            transform: "translate(-50%, -50%)",
            backgroundColor: "success.main",
            px: 1,
            py: 0.5,
            borderRadius: 1,
          }}
        >
          <Typography
            lineHeight={1}
            fontSize={12}
            letterSpacing={2}
            textTransform="uppercase"
            fontWeight="bold"
          >
            Recomendado
          </Typography>
        </Box>
      )}

      <Stack gap={4} sx={{ height: "100%" }}>
        <Typography
          textTransform="uppercase"
          fontWeight={700}
          color="white"
          sx={{ filter: "opacity(.3)" }}
        >
          {plan.name}
        </Typography>

        <PricingCardPrice plan={plan} />

        <Box
          display="grid"
          gridTemplateColumns="auto 1fr"
          rowGap={1}
          columnGap={0.5}
        >
          {plan.includedFeatures.map((feature) => (
            <Fragment key={feature}>
              <CheckCircleIcon sx={{ color: "white" }} />

              <Typography color="white" sx={{ mt: 0.2 }}>
                {feature}
              </Typography>
            </Fragment>
          ))}

          {plan.notIncludedFeatures.map((feature) => (
            <Fragment key={feature}>
              <CancelIcon sx={{ color: "rgba(255, 255, 255, .2)" }} />

              <Typography
                color="rgba(255, 255, 255, .2)"
                sx={{ textDecoration: "line-through" }}
              >
                {feature}
              </Typography>
            </Fragment>
          ))}
        </Box>

        <Stack gap={2} alignItems="center" sx={{ mt: "auto" }}>
          {plan.buttonSubtitle && (
            <Typography textAlign="center" maxWidth="22ch" color="white">
              {parse(plan.buttonSubtitle)}
            </Typography>
          )}

          {plan.isRecomended ? (
            <Button
              id="hotmart-anual"
              variant="contained"
              color="success"
              fullWidth
              LinkComponent="a"
              href={plan.link}
              target="_blank"
            >
              {plan.buttonText}
            </Button>
          ) : (
            <Button
              id="hotmart-mensal"
              variant="contained"
              color="inherit"
              fullWidth
              sx={{ color: "primary.main" }}
              LinkComponent="a"
              href={plan.link}
              target="_blank"
            >
              {plan.buttonText}
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

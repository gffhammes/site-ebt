import { Box, Button, Stack, Typography } from "@mui/material";
import { IPlan } from "../PricingSection";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Fragment } from "react";
import { PricingCardPrice } from "./PricingCardPrice";

export interface IPricingCardProps {
  plan: IPlan;
}

export const PricingCard = ({ plan }: IPricingCardProps) => {
  return (
    <Box
      sx={{
        backgroundColor: plan.isRecomended ? "primary.main" : "#8f8f8f",
        p: 2,
        borderRadius: 4,
        position: "relative",
        overflow: "visible",
        height: "100%",
      }}
    >
      {/* {plan.isRecomended && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 999,
            overflow: "visible",
            transform: "translate(50%, -50%)",
            backgroundColor: "success.main",
          }}
        >
          <Typography>Recomendado</Typography>
        </Box>
      )} */}

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

        {plan.isRecomended ? (
          <Stack gap={2} alignItems="center">
            <Typography textAlign="center" maxWidth="22ch" color="white">
              Entre na lista de espera e{" "}
              <strong>garanta o preço especial!</strong>
            </Typography>

            <Button
              id="hotmart-anual"
              variant="contained"
              color="success"
              fullWidth
              sx={{ mt: "auto" }}
              LinkComponent="a"
              href={plan.link}
              target="_blank"
            >
              GARANTIR PREÇO ESPECIAL
            </Button>
          </Stack>
        ) : (
          <Box sx={{ mt: "auto", color: "white" }}>
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
              ASSINAR
            </Button>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

import { Box, Button, Stack, Typography } from "@mui/material";
import { IPlan } from "./PricingSection";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Fragment } from "react";

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

        <Stack gap={1}>
          <Stack direction="row" gap={0.5}>
            <Typography
              fontWeight={700}
              fontSize={{ xs: 16, md: 24 }}
              color="white"
              lineHeight={1}
            >
              R$
            </Typography>

            <Typography
              fontWeight={700}
              fontSize={{ xs: 40, md: 60 }}
              color="white"
              lineHeight={0.8}
            >
              {plan.price.toLocaleString("pt-BR", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
            </Typography>

            <Typography
              fontWeight={700}
              color="white"
              lineHeight={1}
              fontSize={{ xs: 16, md: 24 }}
              alignSelf="flex-end"
            >
              /{plan.period}
            </Typography>
          </Stack>

          <Typography
            lineHeight={1}
            color="rgba(255, 255, 255, 0.5)"
            fontSize={12}
          >
            + taxas Hotmart
          </Typography>
        </Stack>

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
          <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{ mt: "auto" }}
          >
            ASSINAR
          </Button>
        ) : (
          <Box sx={{ mt: "auto", color: "white" }}>
            <Button
              variant="contained"
              color="inherit"
              fullWidth
              sx={{ color: "primary.main" }}
            >
              ASSINAR
            </Button>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

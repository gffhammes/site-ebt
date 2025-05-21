import { Box, Stack, Tooltip, Typography } from "@mui/material";
import { IPlan } from "../PricingSection";

export interface IPricingCardPriceProps {
  plan: IPlan;
}

export const PricingCardPrice = ({ plan }: IPricingCardPriceProps) => {
  return (
    <Stack gap={2} width="fit-content">
      <Typography lineHeight={1} color="rgba(255, 255, 255, 0.5)" fontSize={16}>
        de{" "}
        <strong
          style={{
            textDecorationLine: "line-through",
          }}
        >
          {plan.oldPrice.toLocaleString("pt-BR", {
            maximumFractionDigits: 0,
            style: "currency",
            currency: "BRL",
          })}
        </strong>{" "}
        por
      </Typography>

      {plan.installments ? (
        <Stack direction="row" gap={1}>
          <Typography
            fontSize={{ xs: 16, md: 24 }}
            color="white"
            lineHeight={1}
          >
            {plan.installments.installmentQuantity}x de
          </Typography>

          <Tooltip
            title="PREÇO ESPECIAL"
            followCursor
            disableHoverListener={!plan.blurPrice}
            enterDelay={0}
            slotProps={{
              popper: {
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [0, -16],
                    },
                  },
                ],
              },
            }}
          >
            <Typography
              fontWeight={700}
              fontSize={{ xs: 40, md: 60 }}
              color="white"
              lineHeight={0.8}
              sx={{
                filter: plan.blurPrice ? "blur(25px)" : "none",
                userSelect: plan.blurPrice ? "none" : "all",
                cursor: plan.blurPrice ? "none" : "unset",
              }}
            >
              {plan.installments.installmentValue.toLocaleString("pt-BR", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
            </Typography>
          </Tooltip>
        </Stack>
      ) : (
        <Stack direction="row" gap={0.5}>
          <Typography
            fontWeight={700}
            fontSize={{ xs: 16, md: 24 }}
            color="white"
            lineHeight={1}
          >
            R$
          </Typography>

          <Tooltip
            title="PREÇO ESPECIAL"
            followCursor
            disableHoverListener={!plan.blurPrice}
            enterDelay={0}
            slotProps={{
              popper: {
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [0, -16],
                    },
                  },
                ],
              },
            }}
          >
            <Typography
              fontWeight={700}
              fontSize={{ xs: 40, md: 60 }}
              color="white"
              lineHeight={0.8}
              sx={{
                filter: plan.blurPrice ? "blur(25px)" : "none",
                userSelect: plan.blurPrice ? "none" : "all",
                cursor: plan.blurPrice ? "none" : "unset",
              }}
            >
              {plan.price.toLocaleString("pt-BR", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
            </Typography>
          </Tooltip>

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
      )}

      <Typography
        lineHeight={1}
        color="rgba(255, 255, 255, 0.5)"
        fontSize={16}
        textAlign="right"
      >
        + taxas Hotmart
      </Typography>
    </Stack>
  );
};

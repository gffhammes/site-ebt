import { Box, Container, Stack, Typography } from "@mui/material";
import { Carousel } from "../Carousel/Carousel";
import { plansData } from "./PricingSection";
import { PricingCard } from "./PricingCard";

export interface IMobilePricingSectionProps {}

export const MobilePricingSection = (props: IMobilePricingSectionProps) => {
  return (
    <Box sx={{ backgroundColor: "black", py: 10 }}>
      <Stack gap={4}>
        <Container>
          <Typography variant="h2" color="white">
            Planos
          </Typography>
        </Container>

        <Carousel
          slides={plansData.map((plan, index) => {
            const isLastItem = index === plansData.length - 1;

            return (
              <Box
                key={plan.name}
                sx={{ flex: "0 0 20rem", ml: 2, mr: isLastItem ? 2 : 0 }}
              >
                <PricingCard plan={plan} />
              </Box>
            );
          })}
        />
      </Stack>
    </Box>
  );
};

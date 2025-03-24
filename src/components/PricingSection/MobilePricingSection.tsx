import { Box, Container, Stack, Typography } from "@mui/material";
import { Carousel } from "../Carousel/Carousel";
import { plansData } from "./PricingSection";
import { PricingCard } from "./PricingCard";
import { MobileSatisfactionCard } from "../SatisfactionCard/MobileSatisfactionCard";
import { AccessCard } from "../AccessCard/AccessCard";

export interface IMobilePricingSectionProps {}

export const MobilePricingSection = (props: IMobilePricingSectionProps) => {
  return (
    <Box>
      <Box sx={{ backgroundColor: "black", pt: 10, pb: 15 }}>
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
                  sx={{ flex: "0 0 18rem", ml: 2, mr: isLastItem ? 2 : 0 }}
                >
                  <PricingCard plan={plan} />
                </Box>
              );
            })}
          />
        </Stack>
      </Box>

      <Stack gap={4}>
        <MobileSatisfactionCard />

        <AccessCard />
      </Stack>
    </Box>
  );
};

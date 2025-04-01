import { Box, Container, Stack, Typography } from "@mui/material";
import { Carousel } from "../Carousel/Carousel";
import { plansData } from "./PricingSection";
import { PricingCard } from "./PricingCard";
import { MobileSatisfactionCard } from "../SatisfactionCard/MobileSatisfactionCard";
import { AccessCard } from "../AccessCard/AccessCard";
import { Animate } from "../Animate";
import { DesktopSatisfactionCard } from "../SatisfactionCard/DesktopSatisfactionCard";

export interface IDesktopPricingSectionProps {}

export const DesktopPricingSection = (props: IDesktopPricingSectionProps) => {
  return (
    <Box>
      <Box sx={{ backgroundColor: "black", pt: 20, pb: 25 }}>
        <Container maxWidth="md">
          <Stack gap={10}>
            <Typography variant="h2" color="white" textAlign="center">
              Planos
            </Typography>

            <Stack direction="row" gap={4}>
              {plansData.map((plan, index) => {
                return (
                  <Box key={plan.name} sx={{ flex: "1 1 100%" }}>
                    <Animate
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "-35%" }}
                      transition={{ duration: 1 }}
                    >
                      <PricingCard plan={plan} />
                    </Animate>
                  </Box>
                );
              })}
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Stack gap={4}>
        <DesktopSatisfactionCard />

        <AccessCard />
      </Stack>
    </Box>
  );
};

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { FaqAccordion } from "./FaqAccordion";
import { ScrollButton } from "../ScrollButton";

export interface IMobileFaqSectionProps {}

export const MobileFaqSection = (props: IMobileFaqSectionProps) => {
  return (
    <Box>
      <Container maxWidth="md">
        <Stack gap={4} alignItems="center">
          <Typography variant="h2" textAlign="center">
            Perguntas frequentes
          </Typography>

          <FaqAccordion />

          <ScrollButton targetSection="planos" variant="contained" id="cta-faq">
            Inscreva-se
          </ScrollButton>
        </Stack>
      </Container>
    </Box>
  );
};

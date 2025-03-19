import { Box, Container, Typography } from "@mui/material";

export interface IMobileReviewsSectionProps {}

export const MobileReviewsSection = (props: IMobileReviewsSectionProps) => {
  return (
    <Box>
      <Container>
        <Typography variant="h2">Depoimentos</Typography>
      </Container>
    </Box>
  );
};

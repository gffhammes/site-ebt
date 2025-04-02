import { Box, Container, Stack, Typography } from "@mui/material";
import { ReviewCard } from "./ReviewCard";
import { ScrollButton } from "../ScrollButton";
import { reviews } from "./ReviewsSection";

export interface IDesktopReviewsSectionProps {}

export const DesktopReviewsSection = (props: IDesktopReviewsSectionProps) => {
  return (
    <Box>
      <Container>
        <Stack gap={4} alignItems="flex-start">
          <Typography variant="h2">Depoimentos</Typography>

          <Stack direction="row" gap={4}>
            {reviews.slice(0, 3).map((review, index) => (
              <Box key={review.name} sx={{ flex: "1 1 100%" }}>
                <ReviewCard data={review} />
              </Box>
            ))}
          </Stack>

          <ScrollButton targetSection="planos" variant="contained">
            Ver planos
          </ScrollButton>
        </Stack>
      </Container>
    </Box>
  );
};

import { Box, Container, Stack, Typography } from "@mui/material";
import { ReviewCard } from "./ReviewCard";
import { Carousel } from "../Carousel/Carousel";
import { ScrollButton } from "../ScrollButton";
import { reviews } from "./ReviewsSection";

export interface IMobileReviewsSectionProps {}

export const MobileReviewsSection = (props: IMobileReviewsSectionProps) => {
  return (
    <Box>
      <Stack gap={4}>
        <Container>
          <Typography variant="h2">Depoimentos</Typography>
        </Container>

        <Carousel
          options={{ loop: true, align: "start" }}
          slides={reviews.map((review, index) => (
            <Box key={review.name} sx={{ flex: "0 0 20rem", pl: 2 }}>
              <ReviewCard data={review} />
            </Box>
          ))}
        />

        <Container>
          <ScrollButton targetSection="planos" variant="contained">
            Ver planos
          </ScrollButton>
        </Container>
      </Stack>
    </Box>
  );
};

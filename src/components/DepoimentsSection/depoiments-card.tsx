import { Typography } from "@mui/material";

import type { Testimonial } from "@/@types/testimonal";

import {
  StyledRating,
  TestimonialCard as Card,
  TestimonialText,
} from "./styles";

interface TestimonialCardProps {
  testimonial: Testimonial;
  isMobile?: boolean;
}

export const DepoimentsCard = ({
  testimonial,
  isMobile = false,
}: TestimonialCardProps) => {
  return (
    <Card>
      <StyledRating
        value={testimonial.rating}
        readOnly
        size={isMobile ? "small" : "medium"}
      />
      <Typography
        variant="h6"
        sx={{
          color: "white",
          fontWeight: 600,
          fontSize: isMobile ? "1rem" : "1.25rem",
        }}
      >
        {testimonial.title}
      </Typography>
      <TestimonialText>
        <Typography
          variant={isMobile ? "body2" : "body1"}
          sx={{
            color: "white",
            flex: 1,
            fontSize: isMobile ? "0.875rem" : undefined,
          }}
        >
          {testimonial.text}
        </Typography>
      </TestimonialText>
    </Card>
  );
};

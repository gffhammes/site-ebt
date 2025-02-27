"use client";

import { Box, Container, Rating, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const testimonials = [
  {
    id: 1,
    name: "João Silva",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Maria Santos",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    name: "Pedro Oliveira",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const TestimonialCard = styled(Box)(({ theme }) => ({
  background: "#333333",
  borderRadius: "16px",
  padding: theme.spacing(3),
  height: "100%",
  minWidth: "280px",
  maxWidth: "320px",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),

  [theme.breakpoints.up("md")]: {
    minWidth: "unset",
    maxWidth: "none",
  },
}));

const ScrollContainer = styled(Box)({
  overflowX: "auto",
  overflowY: "hidden",
  WebkitOverflowScrolling: "touch",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  scrollbarWidth: "none",
  display: "flex",
  gap: "16px",
  padding: "4px",
  marginLeft: "-16px",
  marginRight: "-16px",
  paddingLeft: "16px",
  paddingRight: "16px",
});

export const TestimonialsSection = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: "background.default" }}>
      <Container sx={{ px: { xs: 2, md: 3 } }}>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            mb: { xs: 3, md: 6 },
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "2.5rem" },
          }}
        >
          Depoimentos
        </Typography>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <ScrollContainer>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id}>
                <Rating value={testimonial.rating} readOnly size="small" />
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    flex: 1,
                    fontSize: "0.875rem",
                  }}
                >
                  {testimonial.text}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                  }}
                >
                  {testimonial.name}
                </Typography>
              </TestimonialCard>
            ))}
          </ScrollContainer>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "grid" },
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 3,
          }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id}>
              <Rating value={testimonial.rating} readOnly />
              <Typography variant="body1" sx={{ color: "white", flex: 1 }}>
                {testimonial.text}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: "white", fontWeight: 600 }}
              >
                {testimonial.name}
              </Typography>
            </TestimonialCard>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

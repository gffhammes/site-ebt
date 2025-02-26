"use client";

import { Box, Container, Grid, Typography, Rating } from "@mui/material";
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
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const TestimonialsSection = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Depoimentos
        </Typography>
        <Grid container spacing={3}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} md={4} key={testimonial.id}>
              <TestimonialCard>
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

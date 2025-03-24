"use client";

import { Box, Container, Typography } from "@mui/material";

import type { Testimonial } from "@/@types/testimonal";
import testimonialsData from "@/data/testimonials-data.json";

import { DepoimentsCard } from "./depoiments-card";
import { BackgroundWrapper, ScrollContainer } from "./styles";

export const DepoimentsSection = () => {
  return (
    <BackgroundWrapper>
      <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: "background.default" }}>
        <Container sx={{ px: { xs: 2, md: 3 } }}>
          <Typography
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              mb: { xs: 3, md: 10 },
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "5.5rem" },
              color: "#000",
            }}
          >
            Depoimentos
          </Typography>

          <MobileTestimonials testimonials={testimonialsData} />

          <DesktopTestimonials testimonials={testimonialsData} />
        </Container>
      </Box>

      <Box sx={{ height: { xs: "50px", md: "100px" } }} />
    </BackgroundWrapper>
  );
};

interface TestimonialsListProps {
  testimonials: Testimonial[];
}

const MobileTestimonials = ({ testimonials }: TestimonialsListProps) => {
  return (
    <Box
      sx={{
        display: { xs: "block", md: "none" },
        position: "relative",
        zIndex: 2,
        pb: 4,
      }}
    >
      <ScrollContainer>
        {testimonials.map((testimonial) => (
          <DepoimentsCard
            key={testimonial.id}
            testimonial={testimonial}
            isMobile={true}
          />
        ))}
      </ScrollContainer>
    </Box>
  );
};

const DesktopTestimonials = ({ testimonials }: TestimonialsListProps) => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "grid" },
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 3,
        position: "relative",
        zIndex: 2,
      }}
    >
      {testimonials.map((testimonial) => (
        <DepoimentsCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </Box>
  );
};

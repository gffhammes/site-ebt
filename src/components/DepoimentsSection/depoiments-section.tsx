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

          {/* Mobile View */}
          <MobileTestimonials testimonials={testimonialsData} />

          {/* Desktop View */}
          <DesktopTestimonials testimonials={testimonialsData} />
        </Container>
      </Box>

      {/* Add spacing to ensure the next section is positioned correctly */}
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
        zIndex: 2, // Higher than the background circles
        pb: 4, // Reduced padding since we added spacing at the bottom of the wrapper
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
        zIndex: 2, // Higher than the background circles
      }}
    >
      {testimonials.map((testimonial) => (
        <DepoimentsCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </Box>
  );
};

"use client";

import { Box, Container, Rating, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import type { Testimonial } from "@/@types/testimonal";
import testimonialsData from "@/data/testimonials-data.json";

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

const TestimonialText = styled(Box)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.1)",
  borderRadius: "12px",
  padding: theme.spacing(2),
}));

const StyledRating = styled(Rating)({
  "& .MuiRating-icon": {
    color: "#FFD700",
  },
  "& .MuiRating-iconFilled": {
    color: "#FFD700",
  },
});

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

const BackgroundWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#fff",
  overflow: "hidden",
  "&::after": {
    // eslint-disable-next-line quotes
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "150px",
    background: "url('/bg-circle-depoiments.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundSize: "cover",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export const TestimonialsSection = () => {
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
              mb: { xs: 3, md: 6 },
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.5rem" },
              color: "#000",
            }}
          >
            Depoimentos
          </Typography>
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              position: "relative",
              zIndex: 1,
              pb: 15,
            }}
          >
            <ScrollContainer>
              {testimonialsData.map((testimonial: Testimonial) => (
                <TestimonialCard key={testimonial.id}>
                  <StyledRating
                    value={testimonial.rating}
                    readOnly
                    size="small"
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      fontWeight: 600,
                      fontSize: "1rem",
                    }}
                  >
                    {testimonial.title}
                  </Typography>
                  <TestimonialText>
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
                  </TestimonialText>
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
            {testimonialsData.map((testimonial: Testimonial) => (
              <TestimonialCard key={testimonial.id}>
                <StyledRating value={testimonial.rating} readOnly />
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    fontSize: "1.25rem",
                  }}
                >
                  {testimonial.title}
                </Typography>
                <TestimonialText>
                  <Typography variant="body1" sx={{ color: "white", flex: 1 }}>
                    {testimonial.text}
                  </Typography>
                </TestimonialText>
              </TestimonialCard>
            ))}
          </Box>
        </Container>
      </Box>
    </BackgroundWrapper>
  );
};

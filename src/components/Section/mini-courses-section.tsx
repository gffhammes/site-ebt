"use client";

import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const MiniCoursesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" align="center" sx={{ mb: 6 }}>
        Clique aqui e conheça também nossos mini-cursos:
      </Typography>

      <Box
        sx={{
          position: "relative",
          height: "400px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {[0, 1, 2].map((index) => (
          <Box
            key={index}
            component="img"
            src="/mini-curso-img.png"
            alt={`Mini curso ${index + 1}`}
            sx={{
              position: "absolute",
              width: "300px",
              height: "400px",
              transition: "all 0.5s ease",
              transform: `translateX(${(index - currentSlide) * 50}%) scale(${
                index === currentSlide ? 1 : 0.8
              })`,
              opacity: index === currentSlide ? 1 : 0.5,
              zIndex: index === currentSlide ? 2 : 1,
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Container>
  );
};

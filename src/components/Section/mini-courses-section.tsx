"use client";

import { Box, Container, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const courses = [
  {
    id: 1,
    title: "Curso 1",
    description: "Lorem ipsum dolor sit amet",
    image: "/course-img.png",
  },
  {
    id: 2,
    title: "Curso 2",
    description: "Consectetur adipiscing elit",
    image: "/course-img2.png",
  },
  {
    id: 3,
    title: "Curso 3",
    description: "Sed do eiusmod tempor",
    image: "/course-img3.png",
  },
];

export const MiniCoursesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % courses.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const getSlidePosition = (index: number) => {
    const position = index - currentSlide;
    return position;
  };

  return (
    <Box sx={{ backgroundColor: "white", py: 10 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 15,
            fontSize: { xs: "24px", md: "32px" },
            fontWeight: 500,
            color: "#000",
          }}
        >
          Conheça também nossos mini-cursos:
        </Typography>

        <Box
          sx={{
            position: "relative",
            height: { xs: "300px", md: "400px" },
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            perspective: "1000px",
          }}
        >
          <AnimatePresence mode="popLayout">
            {courses.map((course, index) => {
              const position = getSlidePosition(index);
              return (
                <motion.div
                  key={course.id}
                  style={{
                    position: "absolute",
                    width: "263px",
                    height: "470px",
                    cursor: "pointer",
                  }}
                  animate={{
                    x: `${position * 40}%`,
                    scale: position === 0 ? 1 : 0.8,
                    zIndex: position === 0 ? 2 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  onClick={() => setCurrentSlide(index)}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      borderRadius: "16px",
                      overflow: "hidden",
                      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Box
                      component="img"
                      src={course.image}
                      alt={course.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: "20px",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 1,
                          fontSize: { xs: "16px", md: "18px" },
                          textAlign: "center",
                        }}
                      >
                        {course.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: { xs: "12px", md: "14px" },
                          textAlign: "center",
                        }}
                      >
                        {course.description}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            mt: 15,
          }}
        >
          {courses.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentSlide(index)}
              sx={{
                width: 15,
                height: 15,
                borderRadius: "50%",
                backgroundColor:
                  currentSlide === index ? "primary.main" : "grey.300",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

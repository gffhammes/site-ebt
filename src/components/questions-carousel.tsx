"use client";

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import questionsData from "@/data/questions-data.json";

const CarouselSection = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  background: "white",
  padding: "60px 0",
  overflow: "hidden",
  [theme.breakpoints.up("md")]: {
    padding: "80px 0",
  },
}));

const QuestionPill = styled(Box)(({ theme }) => ({
  background: "#1E1E1E",
  color: "white",
  borderRadius: "100px",
  padding: "8px 16px",
  display: "inline-block",
  margin: "4px 8px",
  whiteSpace: "nowrap",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
    background: theme.palette.primary.main,
  },
}));

const RowContainer = styled(Box)({
  display: "flex",
  overflow: "hidden",
  width: "100%",
  padding: "12px 0",
});

interface InfiniteRowProps {
  questions: string[];
  direction: "left" | "right";
  speed?: number;
  pauseOnHover?: boolean;
}

const InfiniteRow = ({
  questions,
  direction,
  speed = 40,
  pauseOnHover = true,
}: InfiniteRowProps) => {
  const [loopWidth, setLoopWidth] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (rowRef.current) {
      setLoopWidth(rowRef.current.scrollWidth / 2);
    }
  }, [questions]);

  useEffect(() => {
    if (loopWidth > 0) {
      controls.start({
        x: direction === "left" ? [-loopWidth, 0] : [0, -loopWidth],
        transition: {
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        },
      });
    }
  }, [loopWidth, direction, controls, speed]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover && isPaused) {
      setIsPaused(false);
      controls.start({
        x: direction === "left" ? [-loopWidth, 0] : [0, -loopWidth],
        transition: {
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        },
      });
    }
  };

  return (
    <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <motion.div ref={rowRef} style={{ display: "flex" }} animate={controls}>
        {[...questions, ...questions].map((question, index) => (
          <QuestionPill key={`${direction}-${index}`}>
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: "0.875rem", md: "1rem" },
                fontWeight: 500,
              }}
            >
              {question}
            </Typography>
          </QuestionPill>
        ))}
      </motion.div>
    </Box>
  );
};

interface QuestionsCarouselProps {
  title?: string;
  rowCount?: number;
  speed?: number;
  pauseOnHover?: boolean;
}

export const QuestionsCarousel = ({
  rowCount = 2,
  speed = 40,
  pauseOnHover = true,
}: QuestionsCarouselProps) => {
  const questionGroups = Array.from({ length: rowCount }, (_, i) => {
    const start = Math.floor((i * questionsData.length) / rowCount);
    const end = Math.floor(((i + 1) * questionsData.length) / rowCount);
    return questionsData.slice(start, end);
  });

  return (
    <CarouselSection>
      {questionGroups.map((group, index) => (
        <RowContainer key={index}>
          <InfiniteRow
            questions={group}
            direction={index % 2 === 0 ? "left" : "right"}
            speed={speed + index * 5}
            pauseOnHover={pauseOnHover}
          />
        </RowContainer>
      ))}
    </CarouselSection>
  );
};

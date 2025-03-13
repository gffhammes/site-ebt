"use client";

import { Box, Typography } from "@mui/material";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import type { InfiniteRowProps } from "@/@types/questions-carousel";

import { QuestionPill } from "./styles";

export const InfiniteRow = ({
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

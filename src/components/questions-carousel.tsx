"use client";

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import type React from "react";
import { useEffect, useRef, useState } from "react";

const questions = [
  "Qual é o argumento cosmológico para a existência de Deus?",
  "O que é a doutrina das Últimas Coisas?",
  "Qual é a natureza escatológica da mensagem bíblica?",
  "Qual é o ponto de vista cristão sobre o mundo?",
  "Como entender a soberania de Deus?",
  "O que significa a justificação pela fé?",
  "Qual é o papel do Espírito Santo na vida cristã?",
  "Como interpretar as profecias bíblicas?",
];

const firstRowQuestions = questions.slice(0, Math.ceil(questions.length / 2));
const secondRowQuestions = questions.slice(Math.ceil(questions.length / 2));

const QuestionPill = styled(Box)(({}) => ({
  background: "#1E1E1E",
  color: "white",
  borderRadius: "100px",
  padding: "8px 16px",
  display: "inline-block",
  margin: "4px 8px",
  whiteSpace: "nowrap",
}));

const CarouselContainer = styled(Box)({
  position: "relative",
  width: "100%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  background: "white",
  padding: "12px 0",
});

const RowContainer = styled(Box)({
  display: "flex",
  overflow: "hidden",
  width: "100%",
  padding: "8px 0",
});

interface InfiniteRowProps {
  questions: string[];
  direction: "left" | "right";
}

const InfiniteRow: React.FC<InfiniteRowProps> = ({ questions, direction }) => {
  const [loopWidth, setLoopWidth] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rowRef.current) {
      setLoopWidth(rowRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <motion.div
      ref={rowRef}
      style={{ display: "flex" }}
      animate={{
        x: direction === "left" ? [-loopWidth, 0] : [0, -loopWidth],
      }}
      transition={{
        x: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      }}
    >
      {[...questions, ...questions].map((question, index) => (
        <QuestionPill key={`${direction}-${index}`}>
          <Typography
            variant="body2"
            sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
          >
            {question}
          </Typography>
        </QuestionPill>
      ))}
    </motion.div>
  );
};

export const QuestionsCarousel: React.FC = () => {
  return (
    <CarouselContainer>
      <RowContainer>
        <InfiniteRow questions={firstRowQuestions} direction="left" />
      </RowContainer>
      <RowContainer>
        <InfiniteRow questions={secondRowQuestions} direction="right" />
      </RowContainer>
    </CarouselContainer>
  );
};

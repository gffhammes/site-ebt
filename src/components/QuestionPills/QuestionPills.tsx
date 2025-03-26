"use client";

import { Box, Stack, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { QuestionPill } from "./QuestionPill";

export const QuestionPills = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  const firstRowX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const secondRowX = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Define a visibilidade quando pelo menos 50% do elemento estiver visível
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <Stack sx={{ gap: 1 }} ref={targetRef}>
      <Box
        sx={{
          overflow: "hidden",
          position: "relative",
          width: "100%",
          height: "2.5rem",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            gap: "8px",
            position: "absolute",
            x: isVisible ? firstRowX : 0,
          }}
        >
          {questions.map((pill, index) => (
            <QuestionPill key={index}>{pill}</QuestionPill>
          ))}
        </motion.div>
      </Box>

      <Box
        sx={{
          overflow: "hidden",
          position: "relative",
          width: "100%",
          height: "2.5rem",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            gap: "8px",
            position: "absolute",
            x: isVisible ? secondRowX : 0,
          }}
        >
          {questions.map((pill, index) => (
            <QuestionPill key={index}>{pill}</QuestionPill>
          ))}
        </motion.div>
      </Box>
    </Stack>
  );
};

const questions = [
  "Qual é o argumento cosmológico para a existência de Deus?",
  "O que é a doutrina das Últimas Coisas?",
  "Qual é a natureza escatológica da mensagem bíblica?",
  "Qual é o ponto de vista cristão sobre o mundo?",
  "Como entender a soberania de Deus?",
  "O que significa a justificação pela fé?",
  "Qual é o papel do Espírito Santo na vida cristã?",
  "Como interpretar as profecias bíblicas?",
  "Como a Bíblia foi formada e canonizada?",
  "Quais são os atributos de Deus?",
  "O que é a Trindade?",
  "Como entender a predestinação?",
];

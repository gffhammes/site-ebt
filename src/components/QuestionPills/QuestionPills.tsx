"use client";

import { Box, Stack, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

export const QuestionPills = () => {
  const { scrollYProgress } = useScroll();

  const firstRowX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const secondRowX = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

  return (
    <Stack sx={{ gap: 1 }}>
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
            x: firstRowX,
          }}
        >
          {questions.map((pill, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#363636",
                px: 2,
                py: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Typography color="white" whiteSpace="nowrap" fontSize={12}>
                {pill}
              </Typography>
            </Box>
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
            x: secondRowX,
          }}
        >
          {questions.map((pill, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#363636",
                px: 2,
                py: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Typography color="white" whiteSpace="nowrap" fontSize={12}>
                {pill}
              </Typography>
            </Box>
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

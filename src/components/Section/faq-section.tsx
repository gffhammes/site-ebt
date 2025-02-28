"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import type React from "react";
import { useState } from "react";

const faqData = [
  {
    question: "Qual é a confessionalidade da Escola Bibotalk de Teologia?",
    answer: "Resposta",
  },
  {
    question: "Como irei acessar a área de membros e o grupo?",
    answer: "Resposta",
  },
  {
    question: "Posso acessar de qualquer lugar?",
    answer: "Resposta",
  },
  {
    question: "Posso assistir as aulas a qualquer momento?",
    answer: "Resposta",
  },
  {
    question: "Quanto tempo terei acesso à plataforma?",
    answer: "Resposta",
  },
  {
    question: "A quantos cursos eu terei acesso?",
    answer: "Resposta",
  },
  {
    question: "E se eu comprar e quiser cancelar?",
    answer: "Resposta",
  },
];

export const FaqSection = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ position: "relative" }}>
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography variant="h2" align="center" gutterBottom>
            Perguntas frequentes
          </Typography>

          <Box sx={{ my: 4 }}>
            {faqData.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  mb: 1,
                  backgroundColor: "grey.100",
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              href="#planos"
              size="large"
              sx={{
                borderRadius: "25px",
                px: 4,
              }}
            >
              Veja nossos planos
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

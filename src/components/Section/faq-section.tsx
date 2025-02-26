"use client";

import type React from "react";
import { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "Qual é a confessionalidade da Escola Bibotalk de Teologia?",
    answer: "Resposta sobre a confessionalidade da escola...",
  },
  {
    question: "Como irei acessar a área de membros e o grupo?",
    answer: "Informações sobre acesso à área de membros...",
  },
  {
    question: "Posso acessar de qualquer lugar?",
    answer:
      "Sim, você pode acessar nossa plataforma de qualquer lugar com conexão à internet.",
  },
  {
    question: "Posso assistir as aulas a qualquer momento?",
    answer: "Sim, as aulas ficam disponíveis 24/7 na plataforma.",
  },
  {
    question: "Quanto tempo terei acesso à plataforma?",
    answer: "Informações sobre o período de acesso...",
  },
  {
    question: "A quantos cursos eu terei acesso?",
    answer: "Detalhes sobre o acesso aos cursos...",
  },
  {
    question: "E se eu comprar e quiser cancelar?",
    answer: "Política de cancelamento e reembolso...",
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
        <Box
          sx={{
            position: "absolute",
            left: -20,
            top: 100,
            width: "150px",
            height: "300px",
            borderLeft: "2px solid",
            borderColor: "primary.main",
            borderRadius: "100px 0 0 100px",
            opacity: 0.3,
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 150,
            width: "100px",
            height: "200px",
            borderLeft: "2px solid",
            borderColor: "primary.main",
            borderRadius: "100px 0 0 100px",
            opacity: 0.3,
            zIndex: 0,
          }}
        />

        {/* Content */}
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

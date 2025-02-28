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
  useTheme,
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
  const theme = useTheme();

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "white",
        overflow: "hidden",
        "&::before": {
          // eslint-disable-next-line quotes
          content: '""',
          position: "absolute",
          left: "-10%",
          top: "10%",
          width: "300px",
          height: "300px",
          background:
            "url(\"data:image/svg+xml,%3Csvg width='300' height='300' viewBox='0 0 300 300' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='150' cy='150' r='149' stroke='%23F76101' strokeWidth='2' strokeDasharray='4 4'/%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          opacity: 0.5,
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ position: "relative" }}>
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              sx={{
                fontSize: { xs: "32px", md: "48px" },
                fontWeight: 700,
                color: "text.primary",
                mb: 4,
              }}
            >
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
                    boxShadow: "none",
                    borderRadius: "8px",
                    "&.Mui-expanded": {
                      margin: "0 0 8px 0",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      "& .MuiAccordionSummary-content": {
                        margin: "12px 0",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "text.primary",
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "text.secondary" }}>
                      {faq.answer}
                    </Typography>
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
                  py: 1.5,
                  fontSize: "16px",
                  textTransform: "none",
                  backgroundColor: theme.palette.primary.main,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              >
                Veja nossos planos
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

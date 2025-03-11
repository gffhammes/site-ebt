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

import type { FaqItem } from "@/@types/faq";
import faqData from "@/data/faq-data.json";

export const FaqSection = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
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
          left: { xs: "-100%", md: "25%" },
          top: "10%",
          width: "300px",
          height: "300px",
          background: "url('/two-circle-orange.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          opacity: 0.8,
          zIndex: 0,
          display: { xs: "none", md: "block" },
        },
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          py: 8,
          px: { xs: 3, md: 0 },
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            width: "100%",
            padding: { xs: "0 16px", md: "0" },
          }}
        >
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              width: { xs: "100%", md: "65%" },
            }}
          >
            <Typography
              variant="h2"
              textAlign={{ xs: "center", md: "left" }}
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

            {faqData.map((item: FaqItem, index: number) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  mb: 1,
                  backgroundColor: "#EEEEEE",
                  "&:before": { display: "none" },
                  boxShadow: "none",
                  borderRadius: "0",
                  "&.Mui-expanded": {
                    margin: "0 0 8px 0",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}a-content`}
                  id={`panel${index}a-header`}
                >
                  <Typography variant="h6">{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}

            <Box
              sx={{
                textAlign: { xs: "center", md: "left" },
                mt: 4,
              }}
            >
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
                  backgroundColor: "#F76101",
                  "&:hover": {
                    backgroundColor: "#d85500",
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

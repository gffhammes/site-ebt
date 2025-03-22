"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  ButtonBase,
  Collapse,
  Typography,
} from "@mui/material";
import { FAQData } from "./FaqSection";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export interface IFaqAccordionProps {}

export const FaqAccordion = (props: IFaqAccordionProps) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleChange = (newExpandedIndex: number) => {
    setExpandedIndex(newExpandedIndex);
  };

  return (
    <Box>
      {FAQData.map((item, index) => {
        const isExpanded = expandedIndex === index;

        return (
          <Box
            key={item.question}
            sx={{
              backgroundColor: index % 2 === 0 ? "#D9D9D9" : "#C3C1C1",
              filter:
                expandedIndex === -1
                  ? "none"
                  : isExpanded
                  ? "none"
                  : "opacity(.3)",
              transition: ".3s ease all",
            }}
          >
            <ButtonBase
              onClick={() => {
                if (isExpanded) {
                  handleChange(-1);
                } else {
                  handleChange(index);
                }
              }}
              sx={{
                width: "100%",
                textAlign: "left",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  px: 2,
                  py: 1,
                }}
              >
                <Typography fontWeight="bold">{item.question}</Typography>
              </Box>
            </ButtonBase>

            <Collapse in={isExpanded} sx={{ px: 2 }}>
              <Box sx={{ pb: 1 }}>
                <Typography whiteSpace="pre-wrap">{item.answer}</Typography>
              </Box>
            </Collapse>
          </Box>
          // <Accordion
          //   key={item.question}
          //   expanded={expandedIndex === index}
          //   onChange={() => {
          //     if (expandedIndex === index) {
          //       handleChange(-1);
          //     } else {
          //       handleChange(index);
          //     }
          //   }}
          // >
          //   <AccordionSummary
          //     expandIcon={<ExpandMoreIcon />}
          //     aria-controls="question-content"
          //     id="question-header"
          //     sx={{ backgroundColor: index % 2 === 0 ? "#D9D9D9" : "#C3C1C1" }}
          //   >
          //     <Typography>{item.question}</Typography>
          //   </AccordionSummary>

          //   <AccordionDetails>
          //     <Typography whiteSpace="pre-wrap">{item.answer}</Typography>
          //   </AccordionDetails>
          // </Accordion>
        );
      })}
    </Box>
  );
};

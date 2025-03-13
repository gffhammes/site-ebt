"use client";

import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWelcomeSection = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(4),
  color: "black",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  zIndex: 2,
  maxWidth: "600px",

  [theme.breakpoints.up("md")]: {
    color: "white",
    padding: theme.spacing(8),
    paddingLeft: theme.spacing(4),
    marginLeft: "-80px",
  },
}));

interface WelcomeSectionProps {
  isMobile: boolean;
}

export const WelcomeSection = ({ isMobile }: WelcomeSectionProps) => {
  return (
    <StyledWelcomeSection>
      <Typography
        variant={isMobile ? "h4" : "h2"}
        component="h2"
        gutterBottom
        sx={{
          fontSize: isMobile ? "2rem" : "3rem",
          fontWeight: 600,
          lineHeight: 1.2,
          mb: 4,
          textAlign: "left",
          color: isMobile ? "black" : "white",
        }}
      >
        Seja bem-vindo à sua nova jornada de aprendizado!
      </Typography>
      <Typography
        sx={{
          mb: 4,
          fontSize: "1.125rem",
          lineHeight: 1.5,
          color: isMobile ? "black" : "white",
          opacity: 0.9,
        }}
      >
        Na EBT vamos contemplar as disciplinas essenciais da Teologia Cristã.
        Nossos cursos proporcionarão uma introdução clara aos principais temas
        dos estudos bíblico-teológicos.
      </Typography>
      <Typography
        sx={{
          mb: 6,
          fontSize: "1.125rem",
          lineHeight: 1.5,
          color: isMobile ? "black" : "white",
        }}
      >
        <Box component="span" sx={{ fontWeight: 600 }}>
          A EBT é dividida em cursos.
        </Box>{" "}
        Cada curso terá uma média de {isMobile ? "10 a 20" : "18 a 20"} aulas de
        20min de duração.
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          borderRadius: "2rem",
          padding: "0.75rem 2rem",
          fontSize: "1.125rem",
          textTransform: "none",
          minWidth: "280px",
          backgroundColor: "white",
          color: "#ff5722",
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.9)",
          },
        }}
      >
        Acesse a nova turma da EBT!
      </Button>
    </StyledWelcomeSection>
  );
};

"use client";

import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const StyledSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  background: "#ffffff",
  position: "relative",
  overflow: "hidden",
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  padding: theme.spacing(0, 2),
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "60%",
  height: "100%",
  right: 0,
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    top: 0,
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "400px",
    marginTop: theme.spacing(4),
    position: "relative",
  },
}));

const BoldSpan = styled("span")({
  fontWeight: 700,
});

export const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledSection>
      <ContentContainer>
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "50%" },
            pr: { xs: 0, md: 6 },
          }}
        >
          <Box sx={{ position: "relative", mb: { xs: 3, md: 4 } }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                color: "#000",
                fontSize: { xs: "32px", sm: "3rem", md: "3.5rem" },
                lineHeight: { xs: 1.2, md: 1.2 },
                "& span": {
                  display: "inline",
                },
              }}
            >
              Mas afinal, quem é o{" "}
              <Box
                component="span"
                sx={{
                  color: "primary.main",
                  position: "relative",
                  display: "inline",
                }}
              >
                Bibo?
              </Box>
            </Typography>
          </Box>

          {isMobile ? (
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="body1"
                sx={{
                  color: "#000",
                  fontSize: "16px",
                  lineHeight: 1.5,
                  mb: 2,
                }}
              >
                Rodrigo Luis de Aquino, conhecido como <BoldSpan>Bibo</BoldSpan>
                , é um teólogo de 42 anos, casado e pai de dois filhos.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#000",
                  fontSize: "16px",
                  lineHeight: 1.5,
                  mb: 2,
                }}
              >
                Formado em teologia pela Faculdade Luterana de Teologia, com
                especialização em aconselhamento cristão e mestrado pela
                FABAPAR, ele fundou o site e podcast Bibotalk em 2011 para
                tornar o estudo da teologia e da Bíblia mais acessível.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#000",
                  fontSize: "16px",
                  lineHeight: 1.5,
                  mb: 2,
                }}
              >
                O Bibotalk já conta com mais de 430 episódios e 11 milhões de
                downloads. No YouTube, seu canal tem mais de 117 mil inscritos e
                4 milhões de visualizações.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#000",
                  fontSize: "16px",
                  lineHeight: 1.5,
                }}
              >
                Apaixonado por café e chocolate, Bibo não gosta muito de saladas
                e curte assistir a filmes e séries (inclusive gostou do final de
                LOST).
              </Typography>
            </Box>
          ) : (
            <>
              <Typography variant="body1" paragraph sx={{ color: "#000" }}>
                Rodrigo Luis de Aquino, 42 anos, é teólogo, casado com Alexandra
                e pai de Milena e Kalel. Conhecido na internet como{" "}
                <BoldSpan>Bibo</BoldSpan>, ele possui formação em teologia pela
                Faculdade Luterana de Teologia, com
                <BoldSpan> especialização</BoldSpan> em aconselhamento cristão e
                mestrado em teologia pela FABAPAR.
              </Typography>

              <Typography variant="body1" paragraph sx={{ color: "#000" }}>
                Em 2011, Rodrigo fundou o site e podcast{" "}
                <BoldSpan>Bibotalk</BoldSpan>, com o propósito de tornar o
                estudo de teologia e da Bíblia acessível, apresentando os temas
                de forma clara e direta. Hoje, o Bibotalk conta com mais de{" "}
                <BoldSpan>430 episódios</BoldSpan> e ultrapassa{" "}
                <BoldSpan>11 milhões de downloads</BoldSpan>. No YouTube, seu
                canal possui mais de 117 mil inscritos e acumula 4 milhões de
                visualizações.
              </Typography>

              <Typography variant="body1" paragraph sx={{ color: "#000" }}>
                Amante de café e chocolate, Bibo não é tão fã de saladas, e nas
                horas vagas, adora assistir a filmes e séries (sim, ele gostou
                do final de LOST). Atualmente, ele congrega na Onda Dura, em
                Joinville-SC.
              </Typography>
            </>
          )}
        </Box>

        <ImageWrapper>
          <Image
            src="/bibo.png"
            alt="Bibo"
            fill
            style={{
              objectFit: "contain",
              objectPosition: isMobile ? "center" : "right center",
            }}
            priority
          />
        </ImageWrapper>
      </ContentContainer>
    </StyledSection>
  );
};

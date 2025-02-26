"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";

const StyledSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: "#ffffff",
}));

const ImageWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100%",
  minHeight: 400,
});

export const AboutSection = () => {
  return (
    <StyledSection>
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{ fontWeight: 700, color: "#000" }}
            >
              Mas afinal, quem é o{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Bibo?
              </Box>
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: "#000" }}>
              Rodrigo Luis de Aquino, 42 anos, é teólogo, casado com Alexandra e
              pai de Milena e Kalel. Conhecido na internet como Bibo, ele possui
              formação em teologia pela Faculdade Luterana de Teologia, com
              especialização em aconselhamento cristão e mestrado em teologia
              pela FABAPAR.
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: "#000" }}>
              Em 2011, Rodrigo fundou o site e podcast Bibotalk, com o propósito
              de tornar o estudo de teologia e da Bíblia acessível, apresentando
              os temas de forma clara e direta. Hoje, o Bibotalk conta com mais
              de 430 episódios e ultrapassa 11 milhões de downloads. No YouTube,
              seu canal possui mais de 117 mil inscritos e acumula 4 milhões de
              visualizações.
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: "#000" }}>
              Amante de café e chocolate, Bibo não é tão fã de saladas, e nas
              horas vagas, adora assistir a filmes e séries (sim, ele gostou do
              final de LOST). Atualmente, ele congrega na Onda Dura, em
              Joinville-SC.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageWrapper>
              <Image
                src="/bibo.png"
                alt="Bibo"
                layout="fill"
                objectFit="contain"
                priority
              />
            </ImageWrapper>
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  );
};

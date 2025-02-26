"use client";

import { Grid, Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Box)({
  position: "relative",
  aspectRatio: "1",
  borderRadius: "8px",
  overflow: "hidden",
  cursor: "pointer",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.02)",
  },
});

const CardOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background:
    "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: "16px",
});

const WelcomeSection = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(4),
  color: "white",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginTop: "-100px",
}));

const OrangeCircle = styled(Box)({
  position: "absolute",
  left: "-20%",
  top: "-20%",
  width: "140%",
  height: "auto",
  zIndex: -1,
});

const modules = [
  { id: 1, title: "Módulo", description: "breve descrição breve descrição" },
  { id: 2, title: "Módulo", description: "breve descrição breve descrição" },
  { id: 3, title: "Módulo", description: "breve descrição breve descrição" },
  { id: 4, title: "Módulo", description: "breve descrição breve descrição" },
];

export const FeaturesGrid = () => {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <Container sx={{ py: 8 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <WelcomeSection>
              <OrangeCircle>
                <Image
                  src="/circle-orange.png"
                  alt=""
                  width={800}
                  height={800}
                  style={{ width: "100%", height: "auto" }}
                />
              </OrangeCircle>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ color: "white", mb: 3, position: "relative", zIndex: 1 }}
              >
                Seja bem-vindo à sua nova jornada de aprendizado!
              </Typography>
              <Typography
                sx={{ color: "white", mb: 2, position: "relative", zIndex: 1 }}
              >
                Na EBT vamos contemplar as disciplinas essenciais da Teologia
                Cristã. Nossos cursos proporcionarão uma introdução clara aos
                principais temas dos estudos bíblico-teológicos.
              </Typography>
              <Typography
                sx={{ color: "white", position: "relative", zIndex: 1 }}
              >
                <strong>A EBT é dividida em cursos.</strong> Cada curso terá uma
                média de 18 a 20 aulas de 20min de duração.
              </Typography>
            </WelcomeSection>
          </Grid>

          <Grid item xs={12} md={7}>
            <Grid container spacing={2}>
              {modules.map((module) => (
                <Grid item xs={12} sm={6} key={module.id}>
                  <StyledCard>
                    <Image
                      src="/card-grid.png"
                      alt={module.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <CardOverlay>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{ color: "white", mb: 1 }}
                      >
                        {module.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "white" }}>
                        {module.description}
                      </Typography>
                    </CardOverlay>
                  </StyledCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const StyledCard = styled(Box)(({ theme }) => ({
  position: "relative",
  aspectRatio: "1",
  borderRadius: "8px",
  overflow: "hidden",
  cursor: "pointer",
  transition: "transform 0.3s ease",
  minWidth: "280px",
  height: "380px",
  [theme.breakpoints.up("md")]: {
    minWidth: "unset",
    height: "auto",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
}));

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
  color: "black",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",

  [theme.breakpoints.up("md")]: {
    color: "white",
    justifyContent: "center",
    padding: theme.spacing(6),
    position: "relative",
    zIndex: 2,
  },
}));

const OrangeCircleContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "auto",
  zIndex: -1,
  transform: "scale(1.5)",

  [theme.breakpoints.up("md")]: {
    position: "absolute",
    left: "-20%",
    top: "-30%",
    width: "120%",
    height: "150%",
    transform: "none",
    zIndex: 1,
  },
}));

const ScrollContainer = styled(Box)({
  overflowX: "auto",
  overflowY: "hidden",
  WebkitOverflowScrolling: "touch",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  scrollbarWidth: "none",
});

const DesktopContainer = styled(Box)(({}) => ({
  position: "relative",
  overflow: "hidden",
  backgroundColor: "#fff",
  minHeight: "800px",
  display: "flex",
  alignItems: "center",
}));

const modules = [
  { id: 1, title: "Módulo", description: "breve descrição breve descrição" },
  { id: 2, title: "Módulo", description: "breve descrição breve descrição" },
  { id: 3, title: "Módulo", description: "breve descrição breve descrição" },
  { id: 4, title: "Módulo", description: "breve descrição breve descrição" },
];

export const FeaturesGrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "background.default",
      }}
    >
      {isMobile ? (
        <Container sx={{ py: 4, px: 2 }}>
          <Box>
            <WelcomeSection>
              <OrangeCircleContainer>
                <Image
                  src="/circle-orange.png"
                  alt=""
                  width={800}
                  height={200}
                  style={{ width: "100%", height: "auto" }}
                />
              </OrangeCircleContainer>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                  fontSize: "2rem",
                  fontWeight: 600,
                  mb: 3,
                  position: "relative",
                  zIndex: 1,
                  maxWidth: "300px",
                }}
              >
                Seja bem-vindo à sua nova jornada de aprendizado!
              </Typography>
              <Typography
                sx={{
                  mb: 2,
                  position: "relative",
                  zIndex: 1,
                  fontSize: "1rem",
                  lineHeight: 1.5,
                }}
              >
                Na EBT vamos contemplar as disciplinas essenciais da Teologia
                Cristã. Nossos cursos proporcionarão uma introdução clara aos
                principais temas dos estudos bíblico-teológicos.
              </Typography>
              <Typography
                sx={{
                  position: "relative",
                  zIndex: 1,
                  fontSize: "1rem",
                  lineHeight: 1.5,
                  mb: 4,
                }}
              >
                <Box component="span" sx={{ fontWeight: 700 }}>
                  A EBT é dividida em cursos.
                </Box>{" "}
                Cada curso terá uma média de 10 a 20 aulas de 20min de duração.
              </Typography>
            </WelcomeSection>

            <ScrollContainer>
              <Box sx={{ display: "flex", gap: 2, pb: 2 }}>
                {modules.map((module) => (
                  <StyledCard key={module.id}>
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
                ))}
              </Box>
            </ScrollContainer>

            <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  borderRadius: "2rem",
                  padding: "0.75rem 1.5rem",
                  fontSize: "1rem",
                  textTransform: "none",
                  width: "100%",
                  maxWidth: "300px",
                }}
              >
                Acesse a nova turma da EBT!
              </Button>
            </Box>
          </Box>
        </Container>
      ) : (
        <DesktopContainer>
          <Container maxWidth="xl" sx={{ position: "relative" }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6} sx={{ position: "relative" }}>
                <OrangeCircleContainer>
                  <Image
                    src="/circle-orange.png"
                    alt=""
                    width={1000}
                    height={1000}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    priority
                  />
                </OrangeCircleContainer>
                <WelcomeSection>
                  <Typography
                    variant="h2"
                    component="h2"
                    gutterBottom
                    sx={{
                      fontSize: "2.5rem",
                      fontWeight: 600,
                      mb: 3,
                      maxWidth: "480px",
                    }}
                  >
                    Seja bem-vindo à sua nova jornada de aprendizado!
                  </Typography>
                  <Typography
                    sx={{
                      mb: 2,
                      fontSize: "1.125rem",
                      lineHeight: 1.6,
                      maxWidth: "480px",
                    }}
                  >
                    Na EBT vamos contemplar as disciplinas essenciais da
                    Teologia Cristã. Nossos cursos proporcionarão uma introdução
                    clara aos principais temas dos estudos bíblico-teológicos.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1.125rem",
                      lineHeight: 1.6,
                      maxWidth: "480px",
                    }}
                  >
                    <Box component="span" sx={{ fontWeight: 700 }}>
                      A EBT é dividida em cursos.
                    </Box>{" "}
                    Cada curso terá uma média de 18 a 20 aulas de 20min de
                    duração.
                  </Typography>
                </WelcomeSection>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={3}>
                  {modules.map((module) => (
                    <Grid item xs={6} key={module.id}>
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
        </DesktopContainer>
      )}
    </Box>
  );
};

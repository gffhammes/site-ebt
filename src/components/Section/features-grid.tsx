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

const OrangeCircleContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "0",
  transform: "translate(-40%, -50%)",
  width: "1200px",
  height: "1200px",
  zIndex: 0,
  overflow: "hidden",

  [theme.breakpoints.up("md")]: {
    width: "1209px",
    height: "1149px",
    top: "50%",
    left: "0",
    transform: "translate(-20%, -50%)",
  },
}));

const StyledCard = styled(Box)(({ theme }) => ({
  position: "relative",
  height: 350,
  width: 226,
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  boxShadow: theme.shadows[2],
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {
    width: 180,
    height: 280,
    flexShrink: 0,
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
    padding: theme.spacing(10),
    position: "relative",
    zIndex: 2,
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
  overflow: "visible",
  backgroundColor: "#fff",
  paddingBottom: "300px",
}));

const modules = [
  {
    id: 1,
    title: "Módulo",
    description: "breve descrição breve descrição",
    image: "/book-img.png",
  },
  {
    id: 2,
    title: "Módulo",
    description: "breve descrição breve descrição",
    image: "/book-img2.png",
  },
  {
    id: 3,
    title: "Módulo",
    description: "breve descrição breve descrição",
    image: "/book-img3.png",
  },
  {
    id: 4,
    title: "Módulo",
    description: "breve descrição breve descrição",
    image: "/book-img4.png",
  },
];

export const FeaturesGrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "visible",
        color: "#fff",
      }}
    >
      {isMobile ? (
        <Container>
          <Box sx={{ position: "relative", overflow: "hidden" }}>
            <OrangeCircleContainer
              sx={{ backgroundColor: "white" }}
            ></OrangeCircleContainer>

            <WelcomeSection>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  mb: 3,
                  position: "relative",
                  zIndex: 1,
                  maxWidth: "300px",
                  color: "black",
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
                  color: "black",
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
                  color: "black",
                }}
              >
                <Box component="span" sx={{ fontWeight: 700 }}>
                  A EBT é dividida em cursos.
                </Box>{" "}
                Cada curso terá uma média de 10 a 20 aulas de 20min de duração.
              </Typography>
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
                  mb: 4,
                  zIndex: 1,
                  position: "relative",
                }}
              >
                Acesse a nova turma da EBT!
              </Button>
            </WelcomeSection>

            <Box sx={{ position: "relative", zIndex: 1 }}>
              <ScrollContainer>
                <Box sx={{ display: "flex", gap: 2, pb: 2 }}>
                  {modules.map((module) => (
                    <StyledCard key={module.id}>
                      <Image
                        src={module.image || "/placeholder.svg"}
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
            </Box>
          </Box>
        </Container>
      ) : (
        <DesktopContainer>
          <Container
            maxWidth={false}
            sx={{
              position: "relative",
              padding: 0,
              width: "100vw",
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} md={6} sx={{ position: "relative" }}>
                <OrangeCircleContainer>
                  <Image
                    src="/circle-orange.png"
                    alt=""
                    fill
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                      zIndex: 0,
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
                      fontWeight: 600,
                      lineHeight: 1.6,
                      mb: 3,
                      maxWidth: "330px",
                    }}
                  >
                    Seja bem-vindo à sua nova jornada de aprendizado!
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      mb: 2,
                      fontWeight: 300,
                      lineHeight: 1.2,
                      maxWidth: "480px",
                    }}
                  >
                    Na EBT vamos contemplar as disciplinas essenciais da
                    Teologia Cristã. Nossos cursos proporcionarão uma introdução
                    clara aos principais temas dos estudos bíblico-teológicos.
                  </Typography>
                  <Typography
                    sx={{
                      lineHeight: 1.6,
                      maxWidth: "480px",
                      mb: 4,
                    }}
                  >
                    <Box component="span" sx={{ fontWeight: 700 }}>
                      A EBT é dividida em cursos.
                    </Box>{" "}
                    Cada curso terá uma média de 18 a 20 aulas de 20min de
                    duração.
                  </Typography>

                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      borderRadius: "2rem",
                      padding: "0.75rem 1.5rem",
                      fontSize: "1rem",
                      textTransform: "none",
                      maxWidth: "400px",
                      backgroundColor: "white",
                      color: "orange",
                      "&:hover": {
                        backgroundColor: "#ff9800",
                      },
                    }}
                  >
                    Acesse a nova turma da EBT!
                  </Button>
                </WelcomeSection>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={3}>
                  {modules.map((module) => (
                    <Grid item xs={6} key={module.id}>
                      <StyledCard>
                        <Image
                          src={module.image || "/placeholder.svg"}
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

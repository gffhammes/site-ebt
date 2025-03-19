import { Box, Button, Container, Stack, Typography } from "@mui/material";
import bgImage from "../../../public/banner2-1920x850-1.png";

export interface IMobileHeroSectionProps {}

export const MobileHeroSection = (props: IMobileHeroSectionProps) => {
  return (
    <Box sx={{ height: "100svh", backgroundColor: "#000" }}>
      <Box
        sx={{
          height: "50%",
          width: "100%",
          backgroundImage: `url("${bgImage.src}")`,
          backgroundPosition: "top right",
          backgroundSize: "cover",
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        <Container>
          <Stack gap={2} alignItems="flex-start">
            <Typography
              color="white"
              variant="h1"
              fontSize={16}
              sx={{
                "& strong": {
                  fontSize: 74,

                  "&::before": {
                    content: "'simples'",
                    position: "absolute",
                    fontSize: 120,
                    color: "black",
                    zIndex: -1,
                    filter: "opacity(.2)",
                    transform: "translate(-3%, -35%)",
                    textShadow:
                      "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
                  },
                },
              }}
            >
              Chegou a hora de você
              <br />
              aprender Teologia de maneira
              <br />
              <strong>simples</strong>
            </Typography>

            <Button variant="contained">Acesse a nova turma da EBT!</Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

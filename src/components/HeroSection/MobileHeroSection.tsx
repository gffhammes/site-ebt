import { Box, Button, Container, Stack, Typography } from "@mui/material";
import bgImage from "../../../public/banner2-1920x850-1.png";
import { getLineShadowCss } from "@/utils/utils";

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
                  position: "relative",
                  zIndex: 1,

                  "&::before": getLineShadowCss({
                    text: "simples",
                    lineColor: "white",
                    textColor: "black",
                  }),
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

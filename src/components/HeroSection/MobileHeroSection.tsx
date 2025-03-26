import { Box, Button, Container, Stack, Typography } from "@mui/material";
import bgImage from "../../../public/banner2-1920x850-1.png";
import { getLineShadowCss } from "@/utils/utils";
import { EBTLogo } from "../EBTLogo/EBTLogo";

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
          position: "absolute",
        }}
      />

      <Box
        sx={{
          overflow: "hidden",
          position: "relative",
          height: "100%",
        }}
      >
        <Container
          sx={{
            height: "100%",
            pt: 4,
            pb: 17,
          }}
        >
          <Stack height="100%" justifyContent="space-between">
            <EBTLogo height={30} />

            <Stack gap={2} alignItems="flex-start">
              <Typography
                color="white"
                variant="h1"
                fontSize={16}
                sx={{
                  "& strong.outlined": {
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
                <strong style={{ zIndex: 99, position: "relative" }}>
                  Aprender Teologia
                </strong>{" "}
                de maneira
                <br />
                <strong className="outlined">simples</strong>
              </Typography>

              <Button variant="contained">Acesse a nova turma da EBT!</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

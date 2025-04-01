import { getLineShadowCss } from "@/utils/utils";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Animate } from "../Animate";

export interface IMobileBiboSectionProps {}

export const MobileBiboSection = (props: IMobileBiboSectionProps) => {
  return (
    <Box>
      <Container>
        <Stack gap={4}>
          <Typography
            variant="h2"
            fontSize={16}
            fontWeight={400}
            sx={{
              "& strong": {
                fontSize: 48,
                position: "relative",
                zIndex: 1,

                "&::before": {
                  ...getLineShadowCss({
                    lineColor: "black",
                    textColor: "white",
                    text: "Bibo?",
                    opacity: 0.1,
                    transform: "translate(-10%, -30%)",
                  }),
                },
              },
            }}
          >
            Mas afinal, quem é o <br />
            <Animate
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-35%" }}
              transition={{ duration: 1 }}
            >
              <strong>Bibo?</strong>
            </Animate>
          </Typography>

          <Typography>
            Rodrigo Luís de Aquino, conhecido como Bibo, é um teólogo de 42
            anos, casado e pai de dois filhos.
            <br />
            <br />
            Formado em teologia pela Faculdade Luterana de Teologia, com
            especialização em aconselhamento cristão e mestrado pela FABAPAR,
            ele fundou o site e podcast Bibotalk em 2011 para tornar o estudo da
            teologia e da Bíblia mais acessível.
            <br />
            <br />
            O Bibotalk já conta com mais de 430 episódios e 11 milhões de
            downloads. No YouTube, seu canal tem mais de 117 mil inscritos e 4
            milhões de visualizações.
            <br />
            <br />
            Apaixonado por café e chocolate, Bibo não gosta muito de saladas e
            curte assistir a filmes e séries (inclusive gostou do final de
            LOST).
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

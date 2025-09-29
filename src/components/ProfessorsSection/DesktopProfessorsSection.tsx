import { getLineShadowCss } from "@/utils/utils";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Animate } from "../Animate";
import { ScrollButton } from "../ScrollButton";
import { ProfessorsList } from "./ProfessorsList";

export interface IDesktopProfessorsSectionProps {}

export const DesktopProfessorsSection = (
  props: IDesktopProfessorsSectionProps
) => {
  return (
    <Box sx={{ width: "100%", overflow: "hidden", pb: 3, pt: 10 }}>
      <Container maxWidth={false} sx={{ maxWidth: 1000 }}>
        <Stack gap={8} alignItems="center">
          <Typography
            variant="h2"
            fontSize={24}
            fontWeight={400}
            textAlign="center"
            sx={{
              "& strong": {
                fontSize: 48,
                position: "relative",
                zIndex: 1,

                "&::before": {
                  ...getLineShadowCss({
                    lineColor: "black",
                    textColor: "white",
                    text: "professores",
                    opacity: 0.1,
                    transform: "translate(-30%, -30%)",
                  }),
                },
              },
            }}
          >
            Conheça os seus
            <br />
            <Animate
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-35%" }}
              transition={{ duration: 1 }}
            >
              <strong>professores</strong>
            </Animate>
          </Typography>

          <ProfessorsList />

          <ScrollButton
            targetSection="planos"
            variant="contained"
            id="cta-professores"
          >
            escolha seu plano ideal
          </ScrollButton>
        </Stack>
      </Container>
    </Box>
  );
};

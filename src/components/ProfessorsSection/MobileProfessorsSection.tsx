import { getLineShadowCss } from "@/utils/utils";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Animate } from "../Animate";
import { professorsData } from "./ProfessorsSection";
import { ProfessorItem } from "./ProfessorItem";
import { ScrollButton } from "../ScrollButton";

export interface IMobileProfessorsSectionProps {}

export const MobileProfessorsSection = (
  props: IMobileProfessorsSectionProps
) => {
  return (
    <Box sx={{ width: "100%", overflow: "hidden", pb: 3 }}>
      <Container>
        <Stack gap={4} alignItems="center">
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
                    transform: "translate(-10%, -30%)",
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

          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            rowGap={8}
            columnGap={{ xs: 2, md: 8 }}
            sx={{ position: "relative", zIndex: 1 }}
          >
            {professorsData.map((professor) => (
              <ProfessorItem
                professor={professor}
                key={professor.name}
                photoSize="4rem"
              />
            ))}
          </Stack>

          <ScrollButton targetSection="planos" variant="contained">
            Acesse a nova turma da EBT!
          </ScrollButton>
        </Stack>
      </Container>
    </Box>
  );
};

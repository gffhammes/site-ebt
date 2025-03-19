import { getLineShadowCss } from "@/utils/utils";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

export interface IProfessorsSectionProps {}

export const ProfessorsSection = (props: IProfessorsSectionProps) => {
  return (
    <Box sx={{ overflow: "hidden", width: "100%" }}>
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

                "&::before": getLineShadowCss({
                  lineColor: "black",
                  textColor: "white",
                  text: "professores",
                  opacity: 0.1,
                  transform: "translate(-10%, -30%)",
                }),
              },
            }}
          >
            Conheça os seus
            <br />
            <strong>professores</strong>
          </Typography>

          <Box
            display="grid"
            gridTemplateColumns="1fr 1fr"
            rowGap={4}
            columnGap={2}
            sx={{ position: "relative", zIndex: 1 }}
          >
            {professorsData.map((professor) => (
              <Box key={professor.name}>
                <Stack alignItems="center">
                  <Box
                    sx={{
                      height: photoSize,
                      width: photoSize,
                      borderRadius: photoSize,
                      overflow: "hidden",
                    }}
                  >
                    {/* <Image src={professor.photo} alt="Foto" fill /> */}
                    <Box
                      sx={{
                        height: "100%",
                        width: "100%",
                        backgroundColor: "#dcdcdc",
                      }}
                    />
                  </Box>

                  <Typography textAlign="center" fontWeight={700}>
                    {professor.name}
                  </Typography>
                  <Typography textAlign="center">{professor.text}</Typography>
                </Stack>
              </Box>
            ))}
          </Box>

          <Button variant="contained">Acesse a nova turma da EBT!</Button>
        </Stack>
      </Container>
    </Box>
  );
};

const photoSize = "4rem";

export const professorsData = [
  {
    name: "Jailson Mendes",
    text: "Idolatria e Espírito santo",
    photo: "",
  },
  {
    name: "Roberto Mendes",
    text: "Idolatria e Espírito santo",
    photo: "",
  },
  {
    name: "João Mendes",
    text: "Idolatria e Espírito santo",
    photo: "",
  },
  {
    name: "Rodrigo Mendes",
    text: "Idolatria e Espírito santo",
    photo: "",
  },
  {
    name: "Filipe Mendes",
    text: "Idolatria e Espírito santo",
    photo: "",
  },
  {
    name: "Ruan Mendes",
    text: "Idolatria e Espírito santo",
    photo: "",
  },
];

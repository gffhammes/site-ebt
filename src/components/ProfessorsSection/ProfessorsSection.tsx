import { getLineShadowCss } from "@/utils/utils";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import professor1Image from "../../../public/professores/1.png.webp";
import professor2Image from "../../../public/professores/2.png.webp";
import professor3Image from "../../../public/professores/3.png.webp";
import professor4Image from "../../../public/professores/4.png.webp";
import professor5Image from "../../../public/professores/5.png.webp";
import professor6Image from "../../../public/professores/6.png.webp";
import professor7Image from "../../../public/professores/7.png.webp";
import { Animate } from "../Animate";

export interface IProfessorsSectionProps {}

export const ProfessorsSection = (props: IProfessorsSectionProps) => {
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

          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr 1fr", md: "1fr 1fr 1fr" }}
            rowGap={4}
            columnGap={{ xs: 2, md: 8 }}
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
                      position: "relative",
                    }}
                  >
                    <Image
                      src={professor.photo}
                      alt="Foto"
                      fill
                      objectFit="cover"
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
    name: "Cacau Marques",
    text: "Idolatria e Espírito santo",
    photo: professor1Image.src,
  },
  {
    name: "Tiago Garros",
    text: "Idolatria e Espírito santo",
    photo: professor2Image.src,
  },
  {
    name: "Paulo Won",
    text: "Idolatria e Espírito santo",
    photo: professor3Image.src,
  },
  {
    name: "Guilherme Nunes",
    text: "Idolatria e Espírito santo",
    photo: professor4Image.src,
  },
  {
    name: "Willibaldo Neto",
    text: "Idolatria e Espírito santo",
    photo: professor5Image.src,
  },
  {
    name: "Cynthia Muniz",
    text: "Idolatria e Espírito santo",
    photo: professor6Image.src,
  },
  {
    name: "Rodrigo Bibo",
    text: "Idolatria e Espírito santo",
    photo: professor7Image.src,
  },
];

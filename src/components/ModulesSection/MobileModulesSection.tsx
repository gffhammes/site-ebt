import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import circle from "../../../public/Group 38.png";
import { moduleSectionData } from "./ModulesSection";
import { MobileModulesCarousel } from "./MobileModulesCarousel";

export interface IMobileModulesSectionProps {}

export const MobileModulesSection = (props: IMobileModulesSectionProps) => {
  return (
    <Box>
      <Box sx={{ position: "relative", height: "10rem", width: "100%" }}>
        <Image
          src={circle.src}
          alt="circle"
          fill
          objectFit="cover"
          objectPosition="bottom right"
        />
      </Box>

      <Stack gap={4}>
        <Container>
          <Stack gap={4}>
            <Typography variant="h2" maxWidth="14ch">
              {moduleSectionData.h2}
            </Typography>

            <Typography whiteSpace="pre-wrap">
              {moduleSectionData.text}
            </Typography>
          </Stack>
        </Container>

        <MobileModulesCarousel />

        <Container>
          <Button variant="contained">{moduleSectionData.buttonText}</Button>
        </Container>
      </Stack>
    </Box>
  );
};

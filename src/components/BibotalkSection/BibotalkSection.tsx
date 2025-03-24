import { Box, Container, Stack } from "@mui/material";
import Image from "next/image";
import logo from "../../../public/logo-topo-1024x225.png.webp";

export interface IBibotalkSectionProps {}

const logoAspectRatio = logo.height / logo.width;

export const BibotalkSection = (props: IBibotalkSectionProps) => {
  return (
    <Box sx={{ backgroundColor: "#252525", py: 4 }}>
      <Container>
        <Stack alignItems="center" justifyContent="center">
          <Image
            src={logo.src}
            height={50}
            width={50 / logoAspectRatio}
            alt="EBT"
          />
        </Stack>
      </Container>
    </Box>
  );
};

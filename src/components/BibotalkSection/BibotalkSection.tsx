import { Box, Container, Stack } from "@mui/material";
import { EBTLogo } from "../EBTLogo/EBTLogo";

export interface IBibotalkSectionProps {}

export const BibotalkSection = (props: IBibotalkSectionProps) => {
  return (
    <Box sx={{ backgroundColor: "#252525", py: 4 }}>
      <Container>
        <Stack alignItems="center" justifyContent="center">
          <EBTLogo height={50} />
        </Stack>
      </Container>
    </Box>
  );
};

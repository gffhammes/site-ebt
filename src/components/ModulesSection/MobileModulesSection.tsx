import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { moduleSectionData } from "./ModulesSection";
import { MobileModulesCarousel } from "./MobileModulesCarousel";
import { CirclesDecoration } from "../CirclesDecoration/CirclesDecoration";
import { Animate } from "../Animate";

export interface IMobileModulesSectionProps {}

export const MobileModulesSection = (props: IMobileModulesSectionProps) => {
  return (
    <Box>
      <CirclesDecoration
        circleSize={500}
        containerHeight={100}
        xAlign="left"
        yAlign="top"
        padding={{
          bottom: 4,
        }}
      />

      <Stack gap={4}>
        <Container>
          <Stack gap={4}>
            <Animate
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-35%" }}
              transition={{ duration: 1 }}
            >
              <Typography variant="h2" maxWidth="14ch">
                {moduleSectionData.h2}
              </Typography>
            </Animate>

            <Animate
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-35%" }}
              transition={{ duration: 1 }}
            >
              <Typography whiteSpace="pre-wrap">
                {moduleSectionData.text}
              </Typography>
            </Animate>
          </Stack>
        </Container>

        <MobileModulesCarousel align="start" />

        <Container>
          <Button variant="contained">{moduleSectionData.buttonText}</Button>
        </Container>
      </Stack>
    </Box>
  );
};

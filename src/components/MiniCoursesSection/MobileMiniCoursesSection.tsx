import { Box, Container, Stack, Typography } from "@mui/material";
import { MiniCoursesCarousel } from "./MiniCoursesCarousel";

export interface IMobileMiniCoursesSectionProps {}

export const MobileMiniCoursesSection = (
  props: IMobileMiniCoursesSectionProps
) => {
  return (
    <Box>
      <Stack gap={4}>
        <Container>
          <Typography variant="h2" textAlign="center" fontSize={16}>
            Conheça também nossos mini-cursos:
          </Typography>
        </Container>

        <MiniCoursesCarousel />
      </Stack>
    </Box>
  );
};

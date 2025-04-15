import { Box, Container, Stack, Typography } from "@mui/material";
import { MiniCoursesCarousel } from "./MiniCoursesCarousel";
import { MiniCoursesCards } from "./MiniCoursesCards";

export interface IDesktopMiniCoursesSectionProps {}

export const DesktopMiniCoursesSection = (
  props: IDesktopMiniCoursesSectionProps
) => {
  return (
    <Box>
      <Container maxWidth="md">
        <Stack gap={4}>
          <Typography variant="h2" textAlign="center" fontSize={16}>
            Conheça também nossos mini-cursos:
          </Typography>

          <MiniCoursesCards height="31rem" width="17rem" />

          {/* <MiniCoursesCarousel align="center" height="31rem" width="17rem" /> */}
        </Stack>
      </Container>
    </Box>
  );
};

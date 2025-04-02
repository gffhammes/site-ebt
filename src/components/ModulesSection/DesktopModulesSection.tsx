import { Box, Container, Stack } from "@mui/material";
import { Animate } from "../Animate";
import { BigOrangeCircle } from "./BigOrangeCircle";
import { DesktopModulesCarousel } from "./DesktopModulesCarousel";

export interface IDesktopModulesSectionProps {}

export const DesktopModulesSection = (props: IDesktopModulesSectionProps) => {
  return (
    <Box sx={{ pt: 10 }}>
      <Container>
        <Stack direction="row" height="30rem" alignItems="center">
          <BigOrangeCircle />

          <Box
            sx={{
              width: "100%",
              position: "relative",
              zIndex: 0,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: "50rem",
                transform: "translateY(-50%)",
              }}
            >
              <Animate
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                style={{ flex: "0 0 25rem" }}
              >
                <DesktopModulesCarousel height="31rem" width="17rem" />
              </Animate>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

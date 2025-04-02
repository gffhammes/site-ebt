import { Box, Button, Stack, Typography } from "@mui/material";
import { moduleSectionData } from "./ModulesSection";
import { Animate } from "../Animate";

export interface IBigOrangeCircleProps {}

export const BigOrangeCircle = (props: IBigOrangeCircleProps) => {
  return (
    <Animate
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      style={{ flex: "0 0 25rem" }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            position: "absolute",
            height: "50rem",
            width: "50rem",
            borderRadius: "50rem",
            backgroundColor: "primary.main",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 0,
          }}
        ></Box>

        <Stack position="relative" alignItems="flex-start" gap={4}>
          <Typography variant="h2" maxWidth="14ch" color="white">
            {moduleSectionData.h2}
          </Typography>

          <Typography whiteSpace="pre-wrap" color="white">
            {moduleSectionData.text}
          </Typography>

          <Button variant="contained" color="secondary">
            {moduleSectionData.buttonText}
          </Button>
        </Stack>
      </Box>
    </Animate>
  );
};

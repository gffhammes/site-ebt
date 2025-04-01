import { Box, Button, Stack, Typography } from "@mui/material";
import { moduleSectionData } from "./ModulesSection";

export interface IBigOrangeCircleProps {}

export const BigOrangeCircle = (props: IBigOrangeCircleProps) => {
  return (
    <Box sx={{ position: "relative", flex: "0 0 40rem" }}>
      <Box
        sx={{
          position: "absolute",
          height: "50rem",
          width: "50rem",
          borderRadius: "50rem",
          backgroundColor: "primary.main",
          right: 0,
          top: -150,
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

        <Typography whiteSpace="pre-wrap" maxWidth="40ch" color="white">
          {moduleSectionData.text}
        </Typography>

        <Button variant="contained" color="secondary">
          {moduleSectionData.buttonText}
        </Button>
      </Stack>
    </Box>
  );
};

import { Box, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

export interface IQuestionPillProps extends PropsWithChildren {}

export const QuestionPill = ({ children }: IQuestionPillProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#7a7a7a",
        px: 2,
        py: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        transition: ".3s ease all",

        "&:hover": {
          backgroundColor: "#363636",
        },
      }}
    >
      <Typography color="white" whiteSpace="nowrap" fontSize={12}>
        {children}
      </Typography>
    </Box>
  );
};

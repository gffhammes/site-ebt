"use client";

import { Stack, Typography } from "@mui/material";
import { professorsData } from "./ProfessorsSection";
import { ProfessorItem } from "./ProfessorItem";
import { useState } from "react";

export interface IProfessorsListProps {}

export const ProfessorsList = (props: IProfessorsListProps) => {
  const [expanded, setExpanded] = useState(false);

  const arrayToUse = expanded ? professorsData : professorsData.slice(0, 4);

  return (
    <Stack alignItems="center" gap={4}>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        rowGap={{ xs: 6, md: 10 }}
        columnGap={{ xs: 2, md: 6 }}
        sx={{ position: "relative", zIndex: 1 }}
      >
        {arrayToUse.map((professor) => (
          <ProfessorItem
            professor={professor}
            key={professor.name}
            photoSize="6rem"
          />
        ))}
      </Stack>

      {!expanded && (
        <Typography
          onClick={() => setExpanded(true)}
          sx={{
            cursor: "pointer",
            textTransform: "uppercase",
            color: "#848484",
          }}
          fontWeight="bold"
        >
          Ver mais
        </Typography>
      )}
    </Stack>
  );
};

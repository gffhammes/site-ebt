import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

export interface IProfessorItemProps {
  professor: {
    name: string;
    text: string;
    photo: string;
  };
  photoSize: string;
}

export const ProfessorItem = ({
  professor,
  photoSize,
}: IProfessorItemProps) => {
  return (
    <Box key={professor.name} sx={{ maxWidth: "10rem" }}>
      <Stack alignItems="center" gap={1}>
        <Box
          sx={{
            height: photoSize,
            width: photoSize,
            borderRadius: photoSize,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image src={professor.photo} alt="Foto" fill objectFit="cover" />
        </Box>

        <Stack>
          <Typography textAlign="center" fontWeight={700}>
            {professor.name}
          </Typography>

          <Typography textAlign="center">{professor.text}</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

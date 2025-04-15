import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Box, ButtonBase, Stack, Typography } from "@mui/material";
import { miniCourses } from "./MiniCoursesCarousel";
import Image from "next/image";

export interface IMiniCoursesCardsProps {
  height: string;
  width: string;
}

export const MiniCoursesCards = ({ height, width }: IMiniCoursesCardsProps) => {
  return (
    <Stack
      direction="row"
      gap={2}
      justifyContent="center"
      width="fit-content"
      sx={{
        mx: "auto",

        "&:hover .slide": {
          opacity: 0.4,
        },
      }}
    >
      {miniCourses.map((module) => {
        return (
          <Box
            key={module.name}
            sx={{
              height,
              flex: `0 0 ${width}`,
            }}
          >
            <Box
              className="slide"
              sx={{
                position: "relative",
                height: "100%",
                width: "100%",
                cursor: "pointer",
                transition: ".3s ease all",

                "&:hover": {
                  opacity: "1 !important",

                  ".overlay": {
                    opacity: "1 !important",
                  },
                },
              }}
            >
              <Image
                unoptimized={false}
                src={module.image}
                fill
                alt="Modulo"
                objectFit="cover"
              />

              <ButtonBase
                className="overlay"
                sx={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  top: 0,
                  left: 0,
                  backgroundColor: "rgba(0, 0, 0, .8)",
                  transition: ".3s ease all",
                  opacity: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  fontSize: 64,
                  gap: 2,
                }}
                component="a"
                href={module.link}
                target="_blank"
              >
                <OpenInNewIcon color="primary" fontSize="inherit" />

                <Typography color="primary" fontSize={24} fontWeight={700}>
                  Ver mais
                </Typography>
              </ButtonBase>
            </Box>
          </Box>
        );
      })}
    </Stack>
  );
};

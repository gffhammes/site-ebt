import { Box } from "@mui/material";
import { Carousel } from "../Carousel/Carousel";

export interface IMiniCoursesCarouselProps {}

export const MiniCoursesCarousel = (props: IMiniCoursesCarouselProps) => {
  return (
    <Carousel
      options={{ align: "center", loop: true }}
      slides={miniCourses.map((item) => {
        return (
          <Box
            key={item.name}
            sx={{
              height: "20rem",
              flex: "0 0 10rem",
              px: 1,
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "100%",
                backgroundColor: "red",
              }}
            ></Box>
          </Box>
        );
      })}
    />
  );
};

const miniCourses = [
  {
    name: "Módulo 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla nibh sed metus lacinia dignissim.",
    image: "",
  },
  {
    name: "Módulo 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla nibh sed metus lacinia dignissim.",
    image: "",
  },
  {
    name: "Módulo 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla nibh sed metus lacinia dignissim.",
    image: "",
  },
  {
    name: "Módulo 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla nibh sed metus lacinia dignissim.",
    image: "",
  },
  {
    name: "Módulo 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla nibh sed metus lacinia dignissim.",
    image: "",
  },
  {
    name: "Módulo 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla nibh sed metus lacinia dignissim.",
    image: "",
  },
];

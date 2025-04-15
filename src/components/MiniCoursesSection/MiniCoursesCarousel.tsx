import { Box } from "@mui/material";
import { Carousel } from "../Carousel/Carousel";
import Image from "next/image";
import module1Image from "../../../public/modulos/1.webp";
import module2Image from "../../../public/modulos/2.webp";
import module3Image from "../../../public/modulos/3.webp";
import module4Image from "../../../public/modulos/4.webp";
import module5Image from "../../../public/modulos/Espiritualidade-Vertical.webp";
import module6Image from "../../../public/modulos/Panorama-do-AT-Vertical.webp";
import module7Image from "../../../public/modulos/WhatsApp-Image-2022-03-23-at-13.58.16-1.webp";
import module8Image from "../../../public/modulos/WhatsApp-Image-2022-03-23-at-13.58.16-2.webp";
export interface IMiniCoursesCarouselProps {
  align?: "center" | "start";
  height?: string;
  width?: string;
}

export const MiniCoursesCarousel = ({
  align,
  height,
  width,
}: IMiniCoursesCarouselProps) => {
  return (
    <Carousel
      autoscroll
      options={{ align, loop: true }}
      containerSx={{
        "&:hover .slide": {
          opacity: 0.2,
        },
      }}
      autoscrollOptions={{
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        startDelay: 0,
      }}
      slides={miniCourses.map((module) => {
        return (
          <Box
            key={module.name}
            sx={{
              height,
              flex: `0 0 ${width}`,
              pl: align === "center" ? 1 : 2,
              pr: align === "center" ? 1 : 0,
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
                },
              }}
            >
              <Image src={module.image} fill alt="Modulo" objectFit="cover" />
            </Box>
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
    image: module1Image.src,
  },
  {
    name: "Módulo 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla nibh sed metus lacinia dignissim.",
    image: module2Image.src,
  },
  {
    name: "Módulo 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla nibh sed metus lacinia dignissim.",
    image: module3Image.src,
  },
  {
    name: "Módulo 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla nibh sed metus lacinia dignissim.",
    image: module4Image.src,
  },
  {
    name: "Módulo 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla nibh sed metus lacinia dignissim.",
    image: module5Image.src,
  },
  {
    name: "Módulo 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla nibh sed metus lacinia dignissim.",
    image: module6Image.src,
  },
  {
    name: "Módulo 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla nibh sed metus lacinia dignissim.",
    image: module7Image.src,
  },
  {
    name: "Módulo 8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla nibh sed metus lacinia dignissim.",
    image: module8Image.src,
  },
];

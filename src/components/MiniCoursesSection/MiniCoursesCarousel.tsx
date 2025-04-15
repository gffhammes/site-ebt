import { Box } from "@mui/material";
import { Carousel } from "../Carousel/Carousel";
import Image from "next/image";
import teologiaSimples from "../../../public/modulos/WhatsApp-Image-2022-03-23-at-13.58.16-1.webp";
import espiritoSanto from "../../../public/espirito-santo.jpg";

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

export const miniCourses = [
  {
    name: "Teologia Simples",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla nibh sed metus lacinia dignissim.",
    image: teologiaSimples.src,
    link: "https://escolabibotalk.com.br/idolatria/",
  },

  {
    name: "Espírito Santo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla nibh sed metus lacinia dignissim.",
    image: espiritoSanto.src,
    link: "https://escolabibotalk.com.br/espiritosanto-v2/",
  },
];

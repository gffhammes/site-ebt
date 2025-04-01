import { MobileModulesCarousel } from "../ModulesSection/MobileModulesCarousel";

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
  return <MobileModulesCarousel align={align} height={height} width={width} />;
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

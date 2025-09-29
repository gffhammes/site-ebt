import { MobileModulesSection } from "./MobileModulesSection";
import module1Image from "../../../public/modulos/1.webp";
import module2Image from "../../../public/modulos/2.webp";
import module3Image from "../../../public/modulos/3.webp";
import module4Image from "../../../public/modulos/4.webp";
import module5Image from "../../../public/modulos/Espiritualidade-Vertical.webp";
import module6Image from "../../../public/modulos/Panorama-do-AT-Vertical.webp";
import module7Image from "../../../public/modulos/WhatsApp-Image-2022-03-23-at-13.58.16-1.webp";
import module8Image from "../../../public/modulos/WhatsApp-Image-2022-03-23-at-13.58.16-2.webp";
import { ResponsiveComponent } from "../ResponsiveComponent";
import { DesktopModulesSection } from "./DesktopModulesSection";

export interface IModulesSectionProps {}

export const ModulesSection = (props: IModulesSectionProps) => {
  return (
    <ResponsiveComponent
      xs={<MobileModulesSection />}
      md={<DesktopModulesSection />}
    />
  );
};

export const moduleSectionData = {
  h2: "Seja bem-vindo à sua nova jornada de aprendizado!",
  text: `Na EBT vamos contemplar as disciplinas essenciais da Teologia Cristã. Nossos cursos proporcionarão uma introdução clara aos principais temas dos estudos bíblicos-teológicos.

A EBT é dividida em cursos. Cada curso terá uma média de 10 a 20 aulas de 20min de duração.`,
  buttonText: "escolha seu plano ideal",

  modules: [
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
  ],
};

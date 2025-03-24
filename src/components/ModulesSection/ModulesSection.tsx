import { MobileModulesSection } from "./MobileModulesSection";

export interface IModulesSectionProps {}

export const ModulesSection = (props: IModulesSectionProps) => {
  return <MobileModulesSection />;
};

export const moduleSectionData = {
  h2: "Seja bem-vindo à sua nova jornada de aprendizado!",
  text: `Na EBT vamos contemplar as disciplinas essenciais da Teologia Cristã. Nossos cursos proporcionarão uma introdução clara aos principais temas dos estudos bíblicos-teológicos.

A EBT é dividida em cursos. Cada curso terá uma média de 10 a 20 aulas de 20min de duração.`,
  buttonText: "Acesse a nova turma da EBT!",

  modules: [
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
  ],
};

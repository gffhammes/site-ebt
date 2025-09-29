import professor1Image from "../../../public/professores/1.png.webp";
import professor2Image from "../../../public/professores/2.png.webp";
import professor3Image from "../../../public/professores/3.png.webp";
import professor4Image from "../../../public/professores/4.png.webp";
import professor5Image from "../../../public/professores/5.png.webp";
import professor6Image from "../../../public/professores/6.png.webp";
import professor7Image from "../../../public/professores/7.png.webp";
import professor8Image from "../../../public/professores/8.jpeg";
import professor9Image from "../../../public/professores/Andre-Reinke-2022b.jpg";
import professor10Image from "../../../public/professores/_cQC9Yw4_400x400.jpg";
import professor11Image from "../../../public/professores/Marcelo-Berti.jpeg";

import { ResponsiveComponent } from "../ResponsiveComponent";
import { MobileProfessorsSection } from "./MobileProfessorsSection";
import { DesktopProfessorsSection } from "./DesktopProfessorsSection";

export interface IProfessorsSectionProps {}

export const ProfessorsSection = (props: IProfessorsSectionProps) => {
  return (
    <ResponsiveComponent
      xs={<MobileProfessorsSection />}
      md={<DesktopProfessorsSection />}
    />
  );
};

export const professorsData = [
  {
    name: "Rodrigo Bibo",
    text: "Mestre e criador do Bibotalk. Ensina Teologia Simples, Idolatria e mais.",
    photo: professor7Image.src,
  },
  {
    name: "Cacau Marques",
    text: "Pastor e podcaster. Dá aulas de Espiritualidade, Teologia Bíblica e mais.",
    photo: professor1Image.src,
  },
  {
    name: "André Reinke",
    text: "Doutor, autor e historiador. Ensina Panorama do Antigo Testamento.",
    photo: professor9Image.src,
  },
  {
    name: "Guilherme Nunes",
    text: "Teólogo. Dá aulas sobre Paulo e Dons Espirituais.",
    photo: professor4Image.src,
  },
  {
    name: "Cynthia Muniz",
    text: "Pastora anglicana. Ensina Hinos Cristológicos e Mulheres no NT.",
    photo: professor6Image.src,
  },
  {
    name: "Paulo Won",
    text: "Mestre, pastor e autor. Professor de Bibliologia.",
    photo: professor3Image.src,
  },
  {
    name: "Willibaldo Neto",
    text: "Mestre e historiador. Ensina História da Igreja.",
    photo: professor5Image.src,
  },
  {
    name: "Luiz Henrique",
    text: "Teólogo e tutor do curso.",
    photo: professor8Image.src,
  },
  {
    name: "Tiago Garros",
    text: "Mestre e músico. Dá aula de Fé e Ciência.",
    photo: professor2Image.src,
  },
  {
    name: "Erlan Tostes",
    text: "Teólogo, filósofo e autor. Ensina Panorama do Novo Testamento.",
    photo: professor10Image.src,
  },

   {
    name: "Marcelo Berti",
    text: "Teólogo, filósofo e autor. Ensina Panorama do Novo Testamento.",
    photo: professor11Image.src,
  },
];

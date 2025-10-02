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
    text: "Mestre em Teologia, autor, comunicador e fundador do Bibotalk. Dá aula nos módulos: Teologia Simples, Idolatria e muito mais.",
    photo: professor7Image.src,
  },
  {
    name: "Cacau Marques",
    text: "Pastor, autor, historiador e podcaster. Dá aula nos módulos: Espiritualidade, Teologia Bíblica e muito mais.",
    photo: professor1Image.src,
  },
  {
    name: "André Reinke",
    text: "Doutor em Teologia, autor e historiador. Dá aula no módulo: Panorama do Antigo Testamento.",
    photo: professor9Image.src,
  },
  {
    name: "Guilherme Nunes",
    text: "Mestre em Teologia e autor. Dá aula nos módulos: Teologia do Apóstolo Paulo e Teologia do Espirito Santo.",
    photo: professor4Image.src,
  },
  {
    name: "Cynthia Muniz",
    text: "Mestranda em Teologia, pastora anglicana e bióloga. Dá aula nos módulos: Hinos Cristológicos e Mulheres no Novo Testamento.",
    photo: professor6Image.src,
  },
  {
    name: "Paulo Won",
    text: "Mestre em Teologia, autor e pastor. Dá aula no módulo: Bibliologia.",
    photo: professor3Image.src,
  },
  {
    name: "Willibaldo Neto",
    text: "Mestre em Teologia, autor e historiador. Dá aula no módulo: História da Igreja.",
    photo: professor5Image.src,
  },
  {
    name: "Luiz Henrique",
    text: "Teólogo e tutor do curso.",
    photo: professor8Image.src,
  },
  {
    name: "Tiago Garros",
    text: "Doutor em Teologia e músico. Dá aula no módulo: Fé e Ciência.",
    photo: professor2Image.src,
  },
  {
    name: "Erlan Tostes",
    text: "Teólogo, filósofo e autor. Dá aula no módulo: Panorama do Novo Testamento.",
    photo: professor10Image.src,
  },

   {
    name: "Marcelo Berti",
    text: "Pastor e teólogo. Mestre em teologia e pastor na Igreja Batista Fonte. Dá aula no módulo de Hermenêutica.",
    photo: professor11Image.src,
  },
];

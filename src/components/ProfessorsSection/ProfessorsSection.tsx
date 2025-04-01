import professor1Image from "../../../public/professores/1.png.webp";
import professor2Image from "../../../public/professores/2.png.webp";
import professor3Image from "../../../public/professores/3.png.webp";
import professor4Image from "../../../public/professores/4.png.webp";
import professor5Image from "../../../public/professores/5.png.webp";
import professor6Image from "../../../public/professores/6.png.webp";
import professor7Image from "../../../public/professores/7.png.webp";
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
    name: "Cacau Marques",
    text: "Idolatria e Espírito santo",
    photo: professor1Image.src,
  },
  {
    name: "Tiago Garros",
    text: "Idolatria e Espírito santo",
    photo: professor2Image.src,
  },
  {
    name: "Paulo Won",
    text: "Idolatria e Espírito santo",
    photo: professor3Image.src,
  },
  {
    name: "Guilherme Nunes",
    text: "Idolatria e Espírito santo",
    photo: professor4Image.src,
  },
  {
    name: "Willibaldo Neto",
    text: "Idolatria e Espírito santo",
    photo: professor5Image.src,
  },
  {
    name: "Cynthia Muniz",
    text: "Idolatria e Espírito santo",
    photo: professor6Image.src,
  },
  {
    name: "Rodrigo Bibo",
    text: "Idolatria e Espírito santo",
    photo: professor7Image.src,
  },
];

import { ResponsiveComponent } from "../ResponsiveComponent";
import { DesktopReviewsSection } from "./DesktopReviewsSection";
import { MobileReviewsSection } from "./MobileReviewsSection";

export interface IReviewsSectionProps {}

export const ReviewsSection = (props: IReviewsSectionProps) => {
  return (
    <ResponsiveComponent
      xs={<MobileReviewsSection />}
      md={<DesktopReviewsSection />}
    />
  );
};

export interface IReviewData {
  name: string;
  stars: number;
  text: string;
}

export const reviews: IReviewData[] = [
  {
    name: "Jéssica",
    stars: 5,
    text: "Jeito simples e fácil de aprender teologia.",
  },
  {
    name: "Rafael Silas",
    stars: 5,
    text: `Acompanho o Bibotalk a algum tempo e os podcasts sempre me ajudaram na caminhada cristã. Hoje com o curso Teologia Simples tive mais certeza de alguns pontos teológicos que eu já cria e tem me ajudado muito com o que ainda não entendo. Super recomendo pra quem já sabe um pouco ou que quer começar nessa maravilhosa caminhada de conhecimento.`,
  },
  {
    name: "Anderson",
    stars: 5,
    text: `A EBT é excelente e todos os seus professores muito didáticos com aulas muito instigadoras e inspiradoras. O conhecimento adquirido é integrado com a pratica na comunidade cristã e uso no dia a dia diante dos desafios contemporâneos. A escola serve para iniciantes para terem contato com os principais temas da fé e também para quem já tem algum conhecimento e tem acesso as ideias de professores cheios de conhecimento e com experiência pastoral e que lidam com os problemas comuns na vida da igreja.`,
  },
];

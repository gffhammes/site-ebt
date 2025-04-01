import { ResponsiveComponent } from "../ResponsiveComponent";
import { DesktopPricingSection } from "./DesktopPricingSection";
import { MobilePricingSection } from "./MobilePricingSection";

export interface IPricingSectionProps {}

export const PricingSection = (props: IPricingSectionProps) => {
  return (
    <ResponsiveComponent
      xs={<MobilePricingSection />}
      md={<DesktopPricingSection />}
    />
  );
};

export interface IPlan {
  name: string;
  price: number;
  period: string;
  includedFeatures: string[];
  notIncludedFeatures: string[];
  isRecomended: boolean;
}

export const plansData = [
  {
    name: "Anual",
    price: 997.9,
    period: "ano",
    includedFeatures: [
      "Todos os cursos disponíveis",
      "Materiais complementares",
      "Acesso Online e Offline",
      "Atualizações mensais",
      "Orientações teológicas",
      "Avaliações periódicas",
      "Sorteios de livros",
    ],
    notIncludedFeatures: [],
    isRecomended: true,
  },
  {
    name: "Mensal",
    price: 69,
    period: "mês",
    includedFeatures: [
      "Todos os cursos disponíveis",
      "Materiais complementares",
      "Acesso Online e Offline",
      "Atualizações mensais",
    ],
    notIncludedFeatures: [
      "Orientações teológicas",
      "Avaliações periódicas",
      "Sorteios de livros",
    ],
    isRecomended: false,
  },
];

import { Box } from "@mui/material";
import { ResponsiveComponent } from "../ResponsiveComponent";
import { DesktopPricingSection } from "./DesktopPricingSection";
import { MobilePricingSection } from "./MobilePricingSection";
import {
  getYearlyPlanButtonSubtitle,
  getYearlyPlanButtonText,
  getYearlyPlanLink,
  hotmartMonthlyLink,
  PERIOD,
} from "@/utils/utils";

export interface IPricingSectionProps {}

export const PricingSection = () => {
  return (
    <Box id="planos">
      <ResponsiveComponent
        xs={<MobilePricingSection />}
        md={<DesktopPricingSection />}
      />
    </Box>
  );
};

export interface IPlan {
  name: string;
  price: number;
  oldPrice: number;
  period: string;
  includedFeatures: string[];
  notIncludedFeatures: string[];
  isRecomended: boolean;
  link: string;
  buttonSubtitle?: string;
  buttonText: string;
  blurPrice?: boolean;
}

export const plansData: IPlan[] = [
  {
    name: "Anual",
    price: 698,
    oldPrice: 997,
    period: "ano",
    includedFeatures: [
      "Todos os cursos disponíveis",
      "Materiais complementares",
      "Acesso Online e Offline",
      "Atualizações mensais",
      "Grupo privado no Whats",
      "Orientações teológicas",
      "Avaliações periódicas",
      "Sorteios de livros",
    ],
    notIncludedFeatures: [],
    isRecomended: true,
    link: getYearlyPlanLink(PERIOD),
    buttonSubtitle: getYearlyPlanButtonSubtitle(PERIOD),
    blurPrice: PERIOD !== "launch",
    buttonText: getYearlyPlanButtonText(PERIOD),
  },
  {
    name: "Mensal",
    price: 69,
    oldPrice: 97,
    period: "mês",
    includedFeatures: [
      "Todos os cursos disponíveis",
      "Materiais complementares",
      "Acesso Online e Offline",
      "Atualizações mensais",
      "Grupo privado no Whats",
    ],
    notIncludedFeatures: [
      "Orientações teológicas",
      "Avaliações periódicas",
      "Sorteios de livros",
    ],
    isRecomended: false,
    link: hotmartMonthlyLink,
    buttonText: "ASSINAR",
  },
];

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
  oldPrice?: number;
  period: string;
  includedFeatures: string[];
  notIncludedFeatures: string[];
  isRecomended: boolean;
  hideRecomendedBadge?: boolean;
  hideTaxesText?: boolean;
  link: string;
  buttonSubtitle?: string;
  buttonText: string;
  blurPrice?: boolean;
}

const planoAnual: IPlan = {
  name: "Anual",
  oldPrice: 1299,
  price: 997.0,
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
  // link: getYearlyPlanLink(PERIOD),
  link: getYearlyPlanLink(PERIOD),
  buttonSubtitle: getYearlyPlanButtonSubtitle(PERIOD),
  blurPrice: PERIOD !== "launch",
  buttonText: getYearlyPlanButtonText(PERIOD),
};

const planoMensal: IPlan = {
  name: "Mensal",
  price: 69,
  oldPrice: 97,
  period: "mês",
  includedFeatures: [
    "Todos os cursos disponíveis",
    "Materiais complementares",
    "Acesso Online e Offline",
    "Módulos novos a cada 3 meses",
    "Grupo no Whats para infos",
  ],
  notIncludedFeatures: [
    "Orientações teológicas",
    "Avaliações periódicas",
    "Sorteios de livros",
  ],
  isRecomended: false,
  hideRecomendedBadge: true,
  link: hotmartMonthlyLink,
  buttonText: "ASSINAR",
  hideTaxesText: true,
};

export const plansData: IPlan[] = [planoAnual, planoMensal];

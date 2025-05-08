import { Box } from "@mui/material";
import { ResponsiveComponent } from "../ResponsiveComponent";
import { DesktopPricingSection } from "./DesktopPricingSection";
import { MobilePricingSection } from "./MobilePricingSection";
import { hotmartMonthlyLink, hotmartYearlyLink } from "@/utils/utils";

export interface IPricingSectionProps {}

export const PricingSection = (props: IPricingSectionProps) => {
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
  buttonText?: string;
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
    link: hotmartYearlyLink,
    buttonText: `Entre na lista de espera e<br/><strong>garanta o preço especial!</strong>`,
    blurPrice: true,
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
  },
];

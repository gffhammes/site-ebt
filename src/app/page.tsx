import { BiboSection } from "@/components/BiboSection/BiboSection";
import { BibotalkSection } from "@/components/BibotalkSection/BibotalkSection";
import { FaqSection } from "@/components/FaqSection/FaqSection";
import { Footer } from "@/components/Footer/Footer";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { MiniCoursesSection } from "@/components/MiniCoursesSection/MiniCoursesSection";
import { ModulesSection } from "@/components/ModulesSection/ModulesSection";
import { PricingSection } from "@/components/PricingSection/PricingSection";
import { ProfessorsSection } from "@/components/ProfessorsSection/ProfessorsSection";
import { QuestionPills } from "@/components/QuestionPills/QuestionPills";
import { ReviewsSection } from "@/components/ReviewsSection/ReviewsSection";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <div>
      <main style={{ backgroundColor: "white" }}>
        <HeroSection />

        <Stack gap={16} sx={{ pb: 16 }}>
          <ModulesSection />

          <ProfessorsSection />

          <QuestionPills />

          <ReviewsSection />

          <PricingSection />

          <BiboSection />

          <FaqSection />

          <MiniCoursesSection />
        </Stack>

        <BibotalkSection />
      </main>

      <Footer />
    </div>
  );
}

import { Footer } from "@/components/Footer/Footer";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { ModulesSection } from "@/components/ModulesSection/ModulesSection";
import { ProfessorsSection } from "@/components/ProfessorsSection/ProfessorsSection";
import { QuestionsCarousel } from "@/components/QuestionsCarousel/questions-carousel";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <div>
      <main style={{ backgroundColor: "white" }}>
        <HeroSection />

        <Stack gap={16}>
          <ModulesSection />

          <ProfessorsSection />

          <QuestionsCarousel rowCount={2} speed={45} pauseOnHover={true} />
        </Stack>

        {/* <FeaturesGrid />
        <ProfessorsSection />
        <CertificateSection />
        <DepoimentsSection />
        <PricingSection />
        <InformationSection />
        <AboutSection />
        <FaqSection />
        <MiniCoursesSection />
        <BibotalkSection /> */}
      </main>

      <Footer />
    </div>
  );
}

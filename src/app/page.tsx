import { DepoimentsSection } from "@/components/DepoimentsSection/depoiments-section";
import { FeaturesGrid } from "@/components/FeaturesSection/features-grid";
import { BibotalkSection } from "@/components/Footer/bibotalk-section";
import { Footer } from "@/components/Footer/Footer";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { InformationSection } from "@/components/InformationSection/information-section";
import { ModulesSection } from "@/components/ModulesSection/ModulesSection";
import { PricingSection } from "@/components/PricingSection/pricing-section";
import { ProfessorsSection } from "@/components/ProfessorsSection/professors-section";
import { QuestionsCarousel } from "@/components/QuestionsCarousel/questions-carousel";
import { AboutSection } from "@/components/Section/about-section";
import { CertificateSection } from "@/components/Section/certificate-section";
import { FaqSection } from "@/components/Section/faq-section";
import { MiniCoursesSection } from "@/components/Section/mini-courses-section";

export default function Home() {
  return (
    <div>
      <main style={{ backgroundColor: "white" }}>
        <HeroSection />

        <ModulesSection />

        {/* <FeaturesGrid />
        <ProfessorsSection />
        <QuestionsCarousel rowCount={2} speed={45} pauseOnHover={true} />
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

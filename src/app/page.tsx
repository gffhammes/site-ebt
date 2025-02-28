import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { QuestionsCarousel } from "@/components/questions-carousel";
import { AboutSection } from "@/components/Section/about-section";
import { BibotalkSection } from "@/components/Section/bibotalk-section";
import { CertificateSection } from "@/components/Section/certificate-section";
import { FaqSection } from "@/components/Section/faq-section";
import { FeaturesGrid } from "@/components/Section/features-grid";
import { MiniCoursesSection } from "@/components/Section/mini-courses-section";
import { PricingSection } from "@/components/Section/pricing-section";
import { ProfessorsSection } from "@/components/Section/professors-section";
import { TestimonialsSection } from "@/components/Section/testimonials-section";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <FeaturesGrid />
        <ProfessorsSection />
        <QuestionsCarousel />
        <CertificateSection />
        <TestimonialsSection />
        <PricingSection />
        <AboutSection />
        <FaqSection />
        <MiniCoursesSection />
        <BibotalkSection />
      </main>
      <Footer />
    </div>
  );
}

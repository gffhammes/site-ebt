import { FeaturesGrid } from "@/components/Section/features-grid";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { ProfessorsSection } from "@/components/Section/professors-section";
import { CertificateSection } from "@/components/Section/certificate-section";
import { TestimonialsSection } from "@/components/Section/testimonials-section";
import { PricingSection } from "@/components/Section/pricing-section";
import { AboutSection } from "@/components/Section/about-section";
import { FaqSection } from "@/components/Section/faq-section";
import { MiniCoursesSection } from "@/components/Section/mini-courses-section";
import { BibotalkSection } from "@/components/Section/bibotalk-section";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <FeaturesGrid />
        <ProfessorsSection />
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

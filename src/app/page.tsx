import { BiboSection } from "@/components/BiboSection/BiboSection";
import { BibotalkSection } from "@/components/BibotalkSection/BibotalkSection";
import { CirclesDecoration } from "@/components/CirclesDecoration/CirclesDecoration";
import { FaqSection } from "@/components/FaqSection/FaqSection";
import { Footer } from "@/components/Footer/Footer";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { MiniCoursesSection } from "@/components/MiniCoursesSection/MiniCoursesSection";
import { ModulesSection } from "@/components/ModulesSection/ModulesSection";
import { PricingSection } from "@/components/PricingSection/PricingSection";
import { ProfessorsSection } from "@/components/ProfessorsSection/ProfessorsSection";
import { QuestionPills } from "@/components/QuestionPills/QuestionPills";
import { ReviewsSection } from "@/components/ReviewsSection/ReviewsSection";
import { Box, Stack } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="google-site-verification"
          content="ZBUfuQm0u12Is2Mq0wNUvUrlV0S0vmoEWxrdNKWs-Uo"
        />
      </Head>

      <main style={{ backgroundColor: "white" }}>
        <HeroSection />

        <Stack gap={{ xs: 16, md: 24 }} sx={{ pb: 16 }}>
          <ModulesSection />

          <ProfessorsSection />

          <QuestionPills />

          <Box>
            <ReviewsSection />

            <CirclesDecoration
              circleSize={500}
              containerHeight={150}
              xAlign="right"
              yAlign="bottom"
            />

            <PricingSection />

            <Box sx={{ position: "relative", overflow: "visible" }}>
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  width: "100%",
                  mt: -60,
                  zIndex: 1,
                }}
              >
                <CirclesDecoration
                  circleSize={500}
                  containerHeight={600}
                  xAlign="right"
                  yAlign="bottom"
                  padding={{
                    bottom: 4,
                  }}
                />
              </Box>
            </Box>
          </Box>

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

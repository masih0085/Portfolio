import { Box, styled } from "@mui/material";
import { HeroSection } from "./HeroSection";
import { IntroSection } from "./IntroSection";
import { PricingSection } from "./PricingSection";
import { BenefitsSection } from "./BenefitsSection";
import { MenteeSuccessSection } from "./MenteeSuccessSection";
import { MentoringStyleSection } from "./MentoringStyleSection";
import { MentorPrinciplesSection } from "./MentorPrinciplesSection";
import { HappyMenteesSection } from "./HappyMenteesSection";
import { CallToActionMentorshipSection } from "./CallToActionMentorshipSection";

export default function MentorshipPage() {
  return (
    <MentorshipPageWrapper>
      <HeroSection />
      <IntroSection />
      <PricingSection />
      <BenefitsSection />
      <MenteeSuccessSection />
      <MentoringStyleSection />
      <MentorPrinciplesSection />
      <HappyMenteesSection />
      <CallToActionMentorshipSection />
    </MentorshipPageWrapper>
  );
}

const MentorshipPageWrapper = styled(Box)({});


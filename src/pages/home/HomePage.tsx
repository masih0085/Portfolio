import { Box, styled } from "@mui/material";
import { HeroSection } from "./HeroSection";
import { BioSection } from "./BioSection";
import { SkillSection } from "./SkillSection";
import { RecentWorkSection } from "./RecentWorkSection";
import { CollaborationsSection } from "./CollaborationsSection";
import { MyStartupSection } from "./MyStartupSection";
import { StartupProjectSection } from "./StartupProjectSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { CallToActionSection } from "./CallToActionSection";

function Home() {
  return (
    <HomeWrapper as="section">
      <HeroSection />
      <BioSection />
      <SkillSection />
      <RecentWorkSection />
      <CollaborationsSection />
      <MyStartupSection />
      <StartupProjectSection />
      <TestimonialsSection />
      <CallToActionSection />
    </HomeWrapper>
  );
}

const HomeWrapper = styled(Box)({});

export default Home;

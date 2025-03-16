import { Box, styled } from "@mui/material";
import { HeroFoot } from "./components/HeroFoot";
import { HeroBody } from "./components/HeroBody";

export function HeroSection() {
  return (
    <HeroWrapper>
      <HeroBody
        text="I design and code beautifully simple things, and I love what I do."
        title="Designer, Frontend Developer & Mentor"
      />
      <HeroFoot />
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Box)({});

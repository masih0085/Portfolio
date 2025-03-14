import { Box, styled } from "@mui/material";
import { HeroFoot } from "./components/HeroFoot";
import { HeroBody } from "./components/HeroBody";

export function HeroSection() {
  return (
    <HeroWrapper>
      <HeroBody />
      <HeroFoot />
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Box)({});

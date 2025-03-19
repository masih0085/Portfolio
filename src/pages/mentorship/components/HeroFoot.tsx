import { Box, styled } from "@mui/material";

import { mentorshipHeroBody } from "../../../assets/images/index";

export function HeroFoot() {
  return (
    <HeroFootWrapper>
      <Image src={mentorshipHeroBody} width={480} />
    </HeroFootWrapper>
  );
}

const HeroFootWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: "80px",
});

const Image = styled("img")({
  maxWidth: "100%",
  height: "auto",
  display: "block",
});

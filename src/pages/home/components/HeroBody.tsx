import { Box, Grid2 as Grid, styled } from "@mui/material";
import { Container } from "../../../components/ui/Container";

import {
  cssMainColors,
  fonts,
} from "../../../styles/cssVariables/cssVariables";
import heroAvatarImage from "../../../assets/images/heroAvatarImage.webp";

export function HeroBody() {
  return (
    <HeroBodyWrapper>
      <Container>
        <Grid container justifyContent="center">
          <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 9, xl: 9 }}
            textAlign="center"
          >
            <HeroTitle>Designer, Frontend Developer & Mentor</HeroTitle>
            <HeroText>
              I design and code beautifully simple things, and I love what I do.
            </HeroText>
            <HeroBodyImg src={heroAvatarImage} width={210} />
          </Grid>
        </Grid>
      </Container>
    </HeroBodyWrapper>
  );
}

const HeroBodyWrapper = styled(Box)({
  padding: "48px 48px",
});

const HeroTitle = styled("h1")({
  fontWeight: 800,
  fontSize: "45px",
  wordBreak: "break-word",
  marginBottom: "24px",
  color: cssMainColors.secondary,
});

const HeroText = styled("p")({
  fontSize: "24px",
  fontWeight: 400,
  wordBreak: "break-word",
  marginBottom: "24px",
  fontFamily: fonts.georgia,
});

const HeroBodyImg = styled("img")({
  margin: "32px 0",
  maxWidth: "100%",
  height: "auto",
});

import { Box, styled, Grid2 as Grid } from "@mui/material";
import { HeroBody } from "./components/HeroBody";
import { heroFoot } from "../../assets/images/index";
import { Container } from "../../components/ui/Container";
import { useBreakpoints } from "../../styles/theme/hooks/useBreakpoints";

export function HeroSection() {
  const { isMobile } = useBreakpoints();
  return (
    <HeroWrapper as="section">
      <StyledBoxHeroBody>
        <Container>
          <Grid container justifyContent="center">
            <Grid
              size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
              textAlign="center"
            >
              <HeroBody
                text="I design and code beautifully simple things, and I love what I do."
                title="Designer, Frontend Developer & Mentor"
              />
            </Grid>
          </Grid>
        </Container>
      </StyledBoxHeroBody>
      <StyledBoxHeroFoot>
        <Container>
          <Grid container justifyContent="center">
            <Grid
              size={{ xs: 12, sm: 12, md: 12, lg: 9, xl: 9 }}
              textAlign="center"
            >
              <HeroFootImg src={heroFoot} width={isMobile ? 327 : 860} />
            </Grid>
          </Grid>
        </Container>
      </StyledBoxHeroFoot>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Box)({
  paddingTop: "32px",
});

const StyledBoxHeroBody = styled(Box)(({ theme }) => ({
  padding: "48px",
  [theme.breakpoints.down("sm")]: {
    padding: "48px 24px",
  },
}));

const StyledBoxHeroFoot = styled(Box)({
  padding: "0 24px",
});

const HeroFootImg = styled("img")(({ theme }) => ({
  marginBottom: "-7.9px",
  maxWidth: "100%",
  height: "auto",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "-6.9px",
  },
}));

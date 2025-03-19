import { Box, styled, Grid2 as Grid } from "@mui/material";
import { Container } from "../../components/ui/Container";
import { HeroBody } from "./components/HeroBody";
import { HeroFoot } from "./components/HeroFoot";

export function HeroSection() {
  return (
    <HeroSectionWrapper>
      <HeroBodyWrapper>
        <Container>
          <Grid container justifyContent="center" textAlign="center">
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}>
              <HeroBody
                title="I haven't met you, and this is crazy..."
                text="But if you need a mentor, then email me maybe."
              />
            </Grid>
          </Grid>
        </Container>
      </HeroBodyWrapper>
      <HeroFootWrapper>
        <Container>
          <Grid container>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
              <HeroFoot />
            </Grid>
          </Grid>
        </Container>
      </HeroFootWrapper>
    </HeroSectionWrapper>
  );
}

const HeroSectionWrapper = styled(Box)({
  paddingTop: "32px",
});

const HeroBodyWrapper = styled(Box)(({ theme }) => ({
  padding: "48px 24px 0 24px",
}));

const HeroFootWrapper = styled(Box)(({ theme }) => ({
  padding: "0 24px",
}));

import { Box, styled, Grid2 as Grid } from "@mui/material";
import { Container } from "../../components/ui/Container";
import { HeroBody } from "./components/HeroBody";
import { HeroFoot } from "./components/HeroFoot";

export function HeroSection() {
  return (
    <HeroSectionWrapper>
      <Container>
        <Grid container justifyContent="center" textAlign="center">
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}>
            <HeroBody
              title="I haven't met you, and this is crazy..."
              text="But if you need a mentor, then email me maybe."
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
            <HeroFoot />
          </Grid>
        </Grid>
      </Container>
    </HeroSectionWrapper>
  );
}

const HeroSectionWrapper = styled(Box)({});

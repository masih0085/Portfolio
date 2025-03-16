import { Box, Grid2 as Grid } from "@mui/material";
import { styled } from "@mui/system";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";
import { InfoCard } from "../../components/ui/InfoCard";
import { Container } from "../../components/ui/Container";

export function IntroSection() {
  return (
    <IntroSectionWrapper>
      <Container>
        <Grid container justifyContent="center">
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 7, xl: 7 }}>
            <InfoCard
              text="It seems like every other day there's a new design trend to learn, tool to master, and endless articles to read. Honestly, it can be overwhelming and intimidating. I know because I've walked more than a few miles in those shoes. So whether you're new to the field or simply looking for some guidance and support, I can help."
              title="Being a designer is tough."
            />
          </Grid>
        </Grid>
      </Container>
    </IntroSectionWrapper>
  );
}

const IntroSectionWrapper = styled(Box)({
  padding: "144px 72px 224px 72px",
  background: cssMainColors.primary,
  textAlign: "center",
  color: cssMainColors.white,
});

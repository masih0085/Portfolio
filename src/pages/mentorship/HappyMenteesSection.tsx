import { Box, styled, Grid2 as Grid, Typography } from "@mui/material";
import { cssMainColors, fonts } from "../../styles/cssVariables/cssVariables";
import { Container } from "../../components/ui/Container";
import { FeedbackSlider } from "../../components/ui/FeedbackSlider";
import { happyMenteesData } from "../../data/happyMenteesData";

export function HappyMenteesSection() {
  return (
    <HappyMenteesSectionWrapper>
      <Container>
        <HappyMenteesTitle variant="h3">Happy Mentees</HappyMenteesTitle>
        <HappyMenteesText>
          Don't take my word for it when you can take theirs...
        </HappyMenteesText>
        <Grid container justifyContent="center">
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}>
            <FeedbackSlider items={happyMenteesData} />
          </Grid>
        </Grid>
      </Container>
    </HappyMenteesSectionWrapper>
  );
}

const HappyMenteesSectionWrapper = styled(Box)(({ theme }) => ({
  padding: "144px 72px",
  color: cssMainColors.secondary,
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    padding: "80px 24px",
  },
}));

const HappyMenteesTitle = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  fontWeight: 800,
  fontFamily: fonts.eurostile,
  marginBottom: "24px",
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
  },
}));

const HappyMenteesText = styled(Typography)({
  fontSize: "20px",
  fontFamily: fonts.georgia,
  marginBottom: "24px",
});

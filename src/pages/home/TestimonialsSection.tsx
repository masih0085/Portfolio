import { Box, styled, Grid2 as Grid, Typography } from "@mui/material";
import { Container } from "../../components/ui/Container";
import { FeedbackSlider } from "../../components/ui/FeedbackSlider";
import { testimonialsData } from "../../data/testimonialsData";
import { cssMainColors, fonts } from "../../styles/cssVariables/cssVariables";

export function TestimonialsSection() {
  return (
    <TestimonialsSectionWrapper>
      <Container>
        <TestimonialsTitle variant="h2">Testimonials</TestimonialsTitle>
        <TestimonialsText>
          People I've worked with have said some nice things...
        </TestimonialsText>
        <Grid container justifyContent="center">
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}>
            <FeedbackSlider items={testimonialsData} />
          </Grid>
        </Grid>
      </Container>
    </TestimonialsSectionWrapper>
  );
}

const TestimonialsSectionWrapper = styled(Box)(({ theme }) => ({
  padding: "144px 72px",
  borderTop: "1px solid #E6ECF8",
  color: cssMainColors.secondary,
  [theme.breakpoints.down("md")]: {
    padding: "80px 24px",
  },
}));

const TestimonialsTitle = styled(Typography)(({ theme }) => ({
  fontFamily: fonts.eurostile,
  fontSize: "32px",
  fontWeight: 800,
  textAlign: "center",
  marginBottom: "24px",
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
  },
}));

const TestimonialsText = styled(Typography)({
  fontFamily: fonts.georgia,
  fontSize: "20px",
  textAlign: "center",
  marginBottom: "24px",
});

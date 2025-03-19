import { Box, styled, Grid2 as Grid, Typography } from "@mui/material";
import { Container } from "../../components/ui/Container";

import { cssMainColors, fonts } from "../../styles/cssVariables/cssVariables";
import { menteeMap } from "../../assets/images/index";
import { menteeSuccessData } from "../../data/menteeSuccessData";

export function MenteeSuccessSection() {
  return (
    <MenteeSuccessSectionWrapper>
      <Container>
        <Grid container justifyContent="center">
          <StyledGridItem size={{ xs: 12, sm: 12, md: 12, lg: 5, xl: 5 }}>
            <Title variant="h3">
              I’ve mentored talented designers from all over the world
            </Title>
          </StyledGridItem>
        </Grid>
        <Grid container justifyContent="center">
          <StyledGridItem size={{ xs: 12, sm: 12, md: 12, lg: 11, xl: 11 }}>
            <ImageMenteeMapWrapper>
              <Image src={menteeMap} alt="mentee map" />
            </ImageMenteeMapWrapper>
          </StyledGridItem>
        </Grid>
        <Grid container justifyContent="center">
          <StyledGridItem size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
            <SubTitle variant="h5">
              And many have worked for high profile companies:
            </SubTitle>
          </StyledGridItem>
        </Grid>
        <StyledBox>
          <Grid container justifyContent="center">
            {menteeSuccessData.map(({ image, alt }) => {
              return (
                <StyledGridItem
                  size={{ xs: 6, sm: 6, md: 6, lg: 3, xl: 3 }}
                  key={alt}
                >
                  <Image src={image} alt={alt} />
                </StyledGridItem>
              );
            })}
          </Grid>
        </StyledBox>
      </Container>
    </MenteeSuccessSectionWrapper>
  );
}

const MenteeSuccessSectionWrapper = styled(Box)(({ theme }) => ({
  borderTop: "1px solid #E6ECF8",
  padding: "144px 72px",
  textAlign: "center",
  color: cssMainColors.secondary,
  [theme.breakpoints.down("md")]: {
    padding: "80px 24px",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: fonts.eurostile,
  fontSize: "32px",
  fontWeight: 800,
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
  },
}));

const ImageMenteeMapWrapper = styled(Box)({
  marginTop: "48px",
  marginBottom: "80px",
});

const Image = styled("img")({
  maxWidth: "100%",
  height: "auto",
});

const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: "26px",
  fontWeight: 500,
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
}));

const StyledGridItem = styled(Grid)({ padding: "12px" });

const StyledBox = styled(Box)({
  paddingTop: "48px",
});

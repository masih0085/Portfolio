import { Box, styled, Grid2 as Grid, Typography } from "@mui/material";
import { Container } from "../../components/ui/Container";
import { RecentWork } from "./components/RecentWork";
import { Link } from "react-router-dom";
import { DribbbleIcon } from "../../layouts/footer/icons";

import { recentWorkData } from "../../data/recentWorkData";
import { cssMainColors, fonts } from "../../styles/cssVariables/cssVariables";
import { OutlinedPrimaryButton } from "../../components/ui/buttons/OutlinedPrimary";

export function RecentWorkSection() {
  return (
    <RecentWorkWrapper>
      <Container>
        <Title variant="h2">My Recent Work</Title>
        <Description>
          Here are a few past design projects I've worked on. Want to see more?{" "}
          <StyledLink to="#">Email me</StyledLink>.
        </Description>
        <StyledBox>
          <Grid container>
            {recentWorkData.map((item) => {
              return (
                <StyledGridItem
                  size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}
                  key={item.alt}
                >
                  <RecentWork {...item} />
                </StyledGridItem>
              );
            })}
          </Grid>
        </StyledBox>
        <Grid container justifyContent="center">
          <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 3, xl: 3 }}
            textAlign="center"
          >
            <Link to="#">
              <StyledOutlinedPrimaryButton startIcon={<DribbbleIcon />}>
                See more on Dribbble
              </StyledOutlinedPrimaryButton>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </RecentWorkWrapper>
  );
}

const RecentWorkWrapper = styled(Box)(({ theme }) => ({
  padding: "144px 72px",
  [theme.breakpoints.down("sm")]: {
    padding: "80px 24px",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  fontFamily: fonts.eurostile,
  fontWeight: 800,
  color: cssMainColors.secondary,
  marginBottom: "24px",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
  },
}));

const Description = styled(Typography)({
  fontSize: "20px",
  fontWeight: 400,
  fontFamily: fonts.georgia,
  color: cssMainColors.secondary,
  marginBottom: "24px",
  textAlign: "center",
});

const StyledLink = styled(Link)({
  fontSize: "20px",
  color: cssMainColors.skyBlue,
  transition: "all .2s ease-in-out",
  "&:hover": {
    color: cssMainColors.mediumBlue,
  },
});

const StyledBox = styled(Box)(({ theme }) => ({
  padding: "64px 0",
  [theme.breakpoints.down("sm")]: {
    paddingTop: "32px",
    paddingBottom: "64px",
  },
}));

const StyledGridItem = styled(Grid)({
  padding: "12px",
});

const StyledOutlinedPrimaryButton = styled(OutlinedPrimaryButton)({
  fontSize: "20px",
  marginTop: "32px",
  padding: "25px 40px",
  "& > .MuiButton-icon > [data-icon]": {
    width: "20px",
    height: "20px",
  },
});

import { Box, styled, Grid2 as Grid } from "@mui/material";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";
import { Container } from "../../components/ui/Container";
import { MentorPrinciples } from "./components/MentorPrinciples";
import { MentorPrinciplesData } from "../../data/MentorPrinciples";

export function MentorPrinciplesSection() {
  return (
    <MentorPrinciplesSectionWrapper>
      <Container>
        <StyledBox>
          <Grid container justifyContent="center">
            {MentorPrinciplesData.map((data) => {
              return (
                <StyledGridItem size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}>
                  <MentorPrinciples {...data} />
                </StyledGridItem>
              );
            })}
          </Grid>
        </StyledBox>
      </Container>
    </MentorPrinciplesSectionWrapper>
  );
}

const MentorPrinciplesSectionWrapper = styled(Box)(({ theme }) => ({
  padding: "80px 24px 16px 24px",
  color: cssMainColors.secondary,
  marginTop: "-244px",
  [theme.breakpoints.up("sm")]: {
    marginTop: "-224px",
  },
}));

const StyledBox = styled(Box)({
  boxShadow: "0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8",
  borderRadius: "12px",
  backgroundColor: cssMainColors.white,
});

const StyledGridItem = styled(Grid)(({ theme }) => ({
  padding: "60px",

  ["&:not(:last-child)"]: {
    borderBottom: "1px solid #E6ECF8",
  },

  [theme.breakpoints.up("md")]: {
    "&:nth-of-type(1)": {
      borderRight: "1px solid #E6ECF8",
      borderBottom: "1px solid #E6ECF8",
    },
    "&:nth-of-type(2)": {
      borderBottom: "1px solid #E6ECF8",
    },
    "&:nth-of-type(3)": {
      borderRight: "1px solid #E6ECF8",
    },
    "&:nth-of-type(4)": {
      borderBottom: "none",
    },
  },

  [theme.breakpoints.down("md")]: {
    padding: "50px 30px",
  },
}));

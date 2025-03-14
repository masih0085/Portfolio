import { styled } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { cssMainColors, fonts } from "../../styles/cssVariables/cssVariables";
import { Container } from "../../components/ui/Container";
import { Link } from "react-router-dom";
import { SocialIcons } from "./components/SocialIcons";
import { CopyRight } from "./components/CopyRight";
import { MainSiteLogo } from "../../components/icons/MainSiteLogo";

export function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Grid container direction="column" alignItems="center">
          <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}
            textAlign="center"
          >
            <Link to="/">
              <MainSiteLogo width="90px" height="72px" />
            </Link>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}
            textAlign="center"
          >
            <Text>Living, learning, & leveling up one day at a time.</Text>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
            <SocialIcons />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
            <CopyRight />
          </Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  );
}

const FooterWrapper = styled("footer")({
  display: "flex",
  justifyContent: "center",
  padding: "64px 24px",
  backgroundColor: cssMainColors.primary,
  color: cssMainColors.white,
});

const Text = styled("h3")({
  fontSize: "25px",
  fontWeight: 400,
  lineHeight: 1.25,
  wordBreak: "break-word",
  opacity: 0.8,
  margin: "32px 68px",
  color: cssMainColors.white,
  fontFamily: fonts.eurostile,
});

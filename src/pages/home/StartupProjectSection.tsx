import { Box, styled, Grid2 as Grid } from "@mui/material";
import { Container } from "../../components/ui/Container";
import { StartupProject } from "./components/StartupProject";
import { startupProjectSectionData } from "../../data/startupProjectSectionData";
import { CallOut } from "../../components/ui/CallOut";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";

export function StartupProjectSection() {
  return (
    <StartupProjectSectionWrapper>
      <Container>
        <StyledBox>
          <Grid container>
            {startupProjectSectionData.map((data) => {
              return (
                <StyledGridItem
                  size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}
                  key={data.description}
                >
                  <StartupProject {...data} />
                </StyledGridItem>
              );
            })}
          </Grid>
        </StyledBox>
        <Grid container>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
            <CallOut
              link="#"
              buttonName="Start a conversation"
              description="I’m always open to discussing product design work or partnership opportunities."
              title="Interested in collaborating with me?"
              icon={<MessageOutlinedIcon />}
            />
          </Grid>
        </Grid>
      </Container>
    </StartupProjectSectionWrapper>
  );
}

const StartupProjectSectionWrapper = styled(Box)({
  padding: "48px 48px 144px 48px ",
  marginTop: "-224px",
});

const StyledBox = styled(Box)({
  marginBottom: "96px",
});

const StyledGridItem = styled(Grid)({
  padding: "12px ",
});

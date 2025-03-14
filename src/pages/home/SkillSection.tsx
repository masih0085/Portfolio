import { Box, styled, Grid2 as Grid } from "@mui/material";
import { Container } from "../../components/ui/Container";
import { SkillCard } from "./components/SkillCard";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";
import { skillCardData } from "../../data/skillCardData";

export function SkillSection() {
  return (
    <SkillWrapper>
      <Container>
        <StyledBox>
          <Grid container textAlign="center">
            {skillCardData.map((cardData, index) => {
              return (
                <Grid
                  size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}
                  key={cardData.title}
                >
                  <SkillCard
                    {...cardData}
                    sx={{
                      borderRight:
                        skillCardData.length - 1 !== index
                          ? "1px solid #E6ECF8"
                          : undefined,
                      borderBottom:
                        skillCardData.length - 1 !== index
                          ? "0px solid #E6ECF8"
                          : undefined,
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </StyledBox>
      </Container>
    </SkillWrapper>
  );
}

const SkillWrapper = styled(Box)({
  marginTop: "-224px",
  padding:"80px 24px 18px"
});

const StyledBox = styled(Box)({
  borderRadius: "12px",
  backgroundColor: cssMainColors.white,
  boxShadow: " 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8",
});

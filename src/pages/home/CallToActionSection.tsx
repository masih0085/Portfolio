import { Box, styled } from "@mui/material";
import { Container } from "../../components/ui/Container";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";

import { CallToAction } from "../../components/ui/CallToAction";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";

export function CallToActionSection() {
  return (
    <CallToActionSectionWrapper>
      <Container>
        <CallToAction
          textButton="Let's do this"
          description="Interested in working together? We should queue up a time to chat. I’ll buy the coffee."
          title="Start a project"
          icon={<SentimentVerySatisfiedOutlinedIcon />}
        />
      </Container>
    </CallToActionSectionWrapper>
  );
}

const CallToActionSectionWrapper = styled(Box)({
  padding: "80px 24px 32px 24px",
  background: cssMainColors.primary,
});

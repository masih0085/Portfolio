import { Box, styled } from "@mui/material";
import { Container } from "../../components/ui/Container";
import { CallToAction } from "../../components/ui/CallToAction";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";
import BackHandOutlinedIcon from "@mui/icons-material/BackHandOutlined";

export function CallToActionMentorshipSection() {
  return (
    <CallToActionSectionWrapper>
      <Container>
        <CallToAction
          textButton="Introduce yourself"
          description="Thinking about mentorship? Let's talk about it. The first call is on me."
          title="Book a consult"
          icon={<BackHandOutlinedIcon />}
        />
      </Container>
    </CallToActionSectionWrapper>
  );
}

const CallToActionSectionWrapper = styled(Box)(({ theme }) => ({
  padding: "80px 24px 32px 24px",
  background: cssMainColors.primary,
  [theme.breakpoints.down("md")]: {
    marginTop: "48px",
  },
}));

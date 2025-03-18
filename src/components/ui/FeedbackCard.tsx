import { Avatar, Stack, styled, Typography } from "@mui/material";
import { cssMainColors, fonts } from "../../styles/cssVariables/cssVariables";
import { FeedBackCardProps } from "../../types";

export function FeedbackCard(props: FeedBackCardProps) {
  const { avatar, description, subTitle, title } = props;
  return (
    <FeedBackCardWrapper>
      <StyledAvatar src={avatar} alt={title} />
      <Description>{description}</Description>
      <Title variant="h2">{title}</Title>
      <SubTitle variant="subtitle1">{subTitle}</SubTitle>
    </FeedBackCardWrapper>
  );
}

const FeedBackCardWrapper = styled(Stack)({
  alignItems: "center",
  textAlign: "center",
  marginBottom: "32px",
});

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: "96px",
  height: "96px",
  margin: "64px 0",
  [theme.breakpoints.down('sm')]: {
    marginTop: "40px",
    marginBottom: "32px",
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: "25px",
  fontFamily: fonts.eurostile,
  color: cssMainColors.secondary,
  maxWidth: "700px",
  margin: "0 auto 40px",
  [theme.breakpoints.down('sm')]: {
    fontSize: "20px",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "21px",
  fontWeight: "800",
  fontFamily: fonts.eurostile,
  color: cssMainColors.secondary,
  marginBottom: "24px",
  [theme.breakpoints.down('sm')]: {
    fontSize: "20px",
  },
}));

const SubTitle = styled(Typography)({
  color: cssMainColors.secondary,
  fontFamily: fonts.georgia,
  fontSize: "16px",
  marginTop: "-20px",
});

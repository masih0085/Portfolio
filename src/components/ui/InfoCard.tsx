import { Box, styled, Typography } from "@mui/material";
import { cssMainColors, fonts } from "../../styles/cssVariables/cssVariables";

type InfoCardProps = {
  title: string;
  text: string;
  isSecondaryColorText?: boolean;
};

export function InfoCard({
  title,
  text,
  isSecondaryColorText = false,
}: InfoCardProps) {
  return (
    <InfoCardWrapper isSecondaryTextColor={isSecondaryColorText}>
      <CardTitle variant="h2">{title}</CardTitle>
      <CardText variant="body1">{text}</CardText>
    </InfoCardWrapper>
  );
}

const InfoCardWrapper = styled(Box)<{ isSecondaryTextColor?: boolean }>(
  (props) => ({
    padding: "12px",
    color: props.isSecondaryTextColor
      ? cssMainColors.secondary
      : cssMainColors.white,
  })
);

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  fontFamily: fonts.eurostile,
  fontWeight: 800,
  marginBottom: "24px",
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
  },
}));

const CardText = styled(Typography)({
  fontSize: "20px",
  fontFamily: fonts.georgia,
  fontWeight: 400,
});

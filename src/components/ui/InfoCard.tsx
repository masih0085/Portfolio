import { Box, styled, Typography } from "@mui/material";
import { cssMainColors, fonts } from "../../styles/cssVariables/cssVariables";

type InfoCardProps = {
  title: string;
  text: string;
};

export function InfoCard({ title, text }: InfoCardProps) {
  return (
    <InfoCardWrapper>
      <CardTitle variant="h2">{title}</CardTitle>
      <CardText variant="body1">{text}</CardText>
    </InfoCardWrapper>
  );
}

const InfoCardWrapper = styled(Box)({
  padding: "12px",
});

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  fontFamily: fonts.eurostile,
  fontWeight: 800,
  marginBottom: "24px",
  color: cssMainColors.white,
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
  },
}));

const CardText = styled(Typography)({
  fontSize: "20px",
  fontFamily: fonts.georgia,
  fontWeight: 400,
  color: cssMainColors.white,
});

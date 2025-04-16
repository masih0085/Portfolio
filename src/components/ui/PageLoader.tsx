import { Box, styled } from "@mui/material";
import { GridLoader } from "react-spinners";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";

export function PageLoader() {
  return (
    <>
      <PageWrapper />
      <StyledGridLoader color={cssMainColors.primary} />
    </>
  );
}

//this for prevent layout shift
const PageWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
});

const StyledGridLoader = styled(GridLoader)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 99999,
});

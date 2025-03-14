import { Box, styled } from "@mui/material";
import { Collaboration } from "./components/Collaboration";
import { collaborationData } from "../../data/collaborationData";

export function CollaborationsSection() {
  return (
    <CollaborationWrapper>
      <Collaboration images={collaborationData} />
    </CollaborationWrapper>
  );
}

const CollaborationWrapper = styled(Box)({
  padding: "144px 72px",
  borderTop: "1px solid #E6ECF8",
});

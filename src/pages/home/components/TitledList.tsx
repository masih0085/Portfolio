import {
  List,
  ListItem,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";

import {
  cssMainColors,
  fonts,
} from "../../../styles/cssVariables/cssVariables";
import { TitledListProps } from "../types";

export function TitledList(props: TitledListProps) {
  const { items, title } = props;
  return (
    <>
      <Title variant="h3">{title}</Title>
      <CardList>
        {items.map((item) => {
          return (
            <StyledListItem key={item}>
              <StyledListItemText primary={item} />
            </StyledListItem>
          );
        })}
      </CardList>
    </>
  );
}

const Title = styled(Typography)({
  fontSize: "18px",
  fontFamily: fonts.georgia,
  marginTop: "50px",
  marginBottom: "8px",
  color: cssMainColors.primary,
});

const CardList = styled(List)({
  padding: 0,
});

const StyledListItem = styled(ListItem)({
  padding: 0,
  textAlign: "center",
  "&:not(:first-child)": {
    marginTop: "4px",
  },
});

const StyledListItemText = styled(ListItemText)({
  margin: 0,
  "& .MuiTypography-root": {
    fontSize: "18px",
    color: cssMainColors.secondary,
    fontFamily: fonts.georgia,
  },
});

import { styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../layouts/header/Header";
import { Footer } from "../layouts/footer/Footer";

function RootLayout() {
  return (
    <StyledLayout>
      <Header />
      <MainWrapper>
          <Outlet />
      </MainWrapper>
      <Footer />
    </StyledLayout>
  );
}

const StyledLayout = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  width: "100%",
  background: "#ffffff",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    overflowX: "hidden",
  },
}));

const MainWrapper = styled("main")(({ theme }) => ({
  flex: 1,
  marginTop: "200px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "114px",
  },
}));

export default RootLayout;

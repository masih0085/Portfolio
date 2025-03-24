import { RouterProvider } from "react-router-dom";
import { DrawerProvider } from "./layouts/header/context/DrawerContext.tsx";
import { ThemeProviderWrapper } from "./context/ThemeContext.tsx";
import routes from "./routes/routes";

function App() {
  return (
      <ThemeProviderWrapper>
        <DrawerProvider>
          <RouterProvider router={routes} />
        </DrawerProvider>
      </ThemeProviderWrapper>
  );
}

export default App;

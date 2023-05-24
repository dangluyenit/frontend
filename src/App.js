import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";
import { privateRoutes, publicRoutes } from "./pages/routes";
import LayoutAmin from "./pages/Admin/components/Layout/Layout";
import { useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
export const ThemeContext = React.createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Helmet>
          <title>Study Website</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              position: "absolute",
              top: "20vw",
              left: "45vw",
            }}
          >
            <PacmanLoader color="#33FF33" loading={loading} size={50} />
          </div>
        ) : (
          <>
            <Routes>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                );
              })}
            </Routes>
            <Routes>
              {privateRoutes.map((route, index) => {
                const Page2 = route.component;
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <LayoutAmin>
                        <Page2 />
                      </LayoutAmin>
                    }
                  />
                );
              })}
            </Routes>
          </>
        )}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;

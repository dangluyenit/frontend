import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";
import Homepage from "./pages/Homepage/Homepage";
import Course from "./pages/Course/Course";
import Test from "./pages/Test/Test";
import Info from "./pages/Info/Info";
import Login from "./pages/Login/Login";
import CourseDetails from "./pages/Course/CourseDetails";
import TestDetails from "./pages/Test/TestDetails";

export const ThemeContext = React.createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;
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
        <>
          <Layout>
            <Routes>
              <Route exact path="/" Component={Homepage}></Route>
              <Route exact path="/course" Component={Course}></Route>
              <Route exact path="/info" Component={Info}></Route>
              <Route exact path="/test" Component={Test}></Route>
              <Route exact path="/login" Component={Login}></Route>
              <Route exact path="/course/details" Component={CourseDetails} />
              <Route exact path="/test/details" Component={TestDetails} />
            </Routes>
          </Layout>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;

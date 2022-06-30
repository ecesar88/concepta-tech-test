import React from "react";
import AppContainer from "./components/Layout/AppContainer";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import DropDownMenu from "./components/DropDownMenu";
import GlobalStyle from "./styles/globalStyles";
import PageContainer from "./components/Layout/PageContainer";

function App() {
  const dropDownMenuData = [
    {
      name: "Option1 - with a bigger text",
      value: "value1",
    },
    {
      name: "Option2",
      value: "value2",
    },
    {
      name: "Option3",
      value: "value3",
    },
    {
      name: "Option4 - with a bigger text",
      value: "value4",
    },
    {
      name: "Option5",
      value: "value5",
    },
    {
      name: "Option6",
      value: "value6",
    },
    {
      name: "Option7",
      value: "value7",
    },
    {
      name: "Option8 - with a bigger text",
      value: "value8",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <AppContainer>
        <PageContainer>
          <DropDownMenu content={dropDownMenuData} />
        </PageContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

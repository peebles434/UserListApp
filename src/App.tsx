import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
import { observer } from "mobx-react";
import { UserApp } from "./Components/UserList/UserApp";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

export const App = observer(() => {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <UserApp />
        </header>
      </div>
    </MuiThemeProvider>
  );
});

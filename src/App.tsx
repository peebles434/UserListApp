import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
import { observer } from "mobx-react";
import { UserApp } from "./Components/UserList/UserApp";
import { CarApp } from "./Components/CarList/CarApp";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

// TODO: Create functionality for GuiSwitch (sessionstore to track) and also add it to UserApp
export const App = observer(() => {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          {/* <UserApp /> */}
          <CarApp />
        </header>
      </div>
    </MuiThemeProvider>
  );
});

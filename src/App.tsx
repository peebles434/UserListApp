import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
import { observer } from "mobx-react";
import { UserApp } from "./Components/UserList/UserApp";
import { CarApp } from "./Components/CarList/CarApp";
import { useUserData } from "Stores";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

// TODO: Add CarMode state to localStorage so page doesn't jump on refresh

// TODO: Allow user to assign cars to the people on userlist

export const App = observer(() => {
  const { isCarMode } = useUserData((store) => ({
    isCarMode: store.isCarMode,
  }));

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">{isCarMode ? <CarApp /> : <UserApp />}</header>
      </div>
    </MuiThemeProvider>
  );
});

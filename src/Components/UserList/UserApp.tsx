import React from "react";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "../../App.css";
import { observer } from "mobx-react";
import { useUserData } from "Stores";
import { UsersList } from "./UsersList";
import { AddUserForm } from "./AddUserForm";
import { GuiSwitch } from "../GuiSwitch";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

export const UserApp = observer(() => {
  const { clearUsers, numberOfUsers, addFakeUsers } = useUserData((store) => ({
    clearUsers: store.clearUsers,
    numberOfUsers: store.numberOfUsers,
    addFakeUsers: store.addFakeUsers,
  }));

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <h1> User List </h1>
          <AddUserForm />
          <Button
            type="button"
            variant="contained"
            color="secondary"
            size="small"
            disabled={numberOfUsers ? false : true}
            onClick={clearUsers}
          >
            Reset Users
          </Button>
          {<UsersList />}
          {numberOfUsers ? numberOfUsers : ""}
          <Button
            type="button"
            variant="outlined"
            color="secondary"
            size="small"
            disabled={numberOfUsers ? true : false}
            onClick={addFakeUsers}
          >
            Add Fake Users
          </Button>
          <GuiSwitch />
        </header>
      </div>
    </MuiThemeProvider>
  );
});

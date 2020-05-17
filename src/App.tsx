import React from "react";
import logo from "./logo.svg";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./App.css";
import { observer } from "mobx-react";
import { useUserData } from "Stores";
import { UsersList } from "Components/UserList/UsersLists";
import AddUserForm from "./Components/UserList/AddUserForm";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

export const App = observer(() => {
  const { clearUsers, numberOfUsers, addFake } = useUserData((store) => ({
    clearUsers: store.clearUsers,
    numberOfUsers: store.numberOfUsers,
    addFake: store.addFake,
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
            onClick={addFake}
          >
            Add Fake Users
          </Button>
        </header>
      </div>
    </MuiThemeProvider>
  );
});

import React from "react";
import logo from "./logo.svg";
import Button from "@material-ui/core/Button";
import "./App.css";
import { observer } from "mobx-react";
import { useUserData } from "Stores";
import { UsersList } from "Components/UserList/UsersLists";

export const App = observer(() => {
  const { clearUsers, addUser, numberOfUsers } = useUserData((store) => ({
    clearUsers: store.clearUsers,
    addUser: store.addUser,
    numberOfUsers: store.numberOfUsers,
    // getUserById: store.getUserById,
  }));

  const AddUsers = () => {
    addUser({ id: "7", name: "Chris", age: 30 });
    addUser({ id: "8", name: "Ryan", age: 27 });
  };

  return (
    <div className="App">
      <header className="App-header">
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
        <Button
          type="button"
          variant="contained"
          color="primary"
          size="large"
          onClick={AddUsers}
        >
          Click Me Push
        </Button>
        {<UsersList />}
        {/* {JSON.stringify(getUserById(7))} */}
        {numberOfUsers ? numberOfUsers : ""}
      </header>
    </div>
  );
});

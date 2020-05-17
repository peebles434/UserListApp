import React, { useState } from "react";
import { useUserData } from "Stores";
import { random } from "faker";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }),
);

const AddUserForm = () => {
  const classes = useStyles();

  const { addUser } = useUserData((store) => ({
    addUser: store.addUser,
  }));

  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const addNewUser = (e: any) => {
    e.preventDefault();
    if (userName && userAge) {
      addUser({ id: random.number().toString(), name: userName, age: parseInt(userAge) });
      setUserName("");
      setUserAge("");
    }
  };

  return (
    <div>
      <form onSubmit={addNewUser} className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          value={userName}
          label="Name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <TextField
          id="standard-basic"
          value={userAge}
          label="Age"
          onChange={(e) => setUserAge(e.target.value)}
        />
        <br />
        <Button variant="contained" color="primary" type="submit">
          Add New User
        </Button>
        <br />
      </form>
    </div>
  );
};

export { AddUserForm as default };

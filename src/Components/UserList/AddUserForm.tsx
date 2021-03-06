import React, { useState, ChangeEvent } from "react";
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
  const [userAge, setUserAge] = useState<number>(0);

  const addNewUser = (e: any) => {
    e.preventDefault();
    if (userName && userAge) {
      addUser({ id: random.number().toString(), name: userName, age: userAge });
      setUserName("");
      setUserAge(0);
    }
  };

  const onNameChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserName(e.currentTarget.value);
  };

  const onAgeChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!e.currentTarget.value.match("(^[0-9]+$|^$)")) return false;
    setUserAge(Number(e.currentTarget.value));
  };

  return (
    <div>
      {/* <form onSubmit={addNewUser} className={classes.root} noValidate autoComplete="off"> */}
      <TextField
        id="standard-basic"
        value={userName}
        label="Name"
        onChange={onNameChange}
      />
      <br />
      <TextField
        id="standard-basic"
        value={userAge || ""}
        label="Age"
        onChange={onAgeChange}
      />
      <br />
      <Button variant="contained" color="primary" type="submit" onClick={addNewUser}>
        Add New User
      </Button>
      <br />
      {/* </form> */}
    </div>
  );
};

export { AddUserForm as default };

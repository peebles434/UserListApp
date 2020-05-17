import React from "react";
import { observer } from "mobx-react";
import {
  ListItem,
  ListItemText,
  makeStyles,
  Theme,
  createStyles,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { IUserModelInstance } from "Models";
import { useUserData } from "Stores";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      color: "#FFFFFF",
    },
    secondary: {
      color: "#FFFFFF",
    },
  }),
);

interface IUserListProps {
  user: IUserModelInstance;
}

export const UserListItem = observer((props: IUserListProps) => {
  const classes = useStyles();

  const { userMapToArray, deleteUser } = useUserData((store) => ({
    userMapToArray: store.userMapToArray,
    deleteUser: store.deleteUser,
  }));

  // NOTE: Delete user by Array Index
  // const removeUser = (index: number) => () => {
  //   console.log(index);
  //   deleteUser(index);
  // };

  // NOTE: Delete user by Map Key (we used the items id)
  const removeUser = (id: string) => () => {
    deleteUser(id);
  };

  return (
    <ListItem>
      <ListItemText
        primary={props.user.name}
        secondary={props.user.age}
        className={classes.secondary}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={removeUser(props.user.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
});

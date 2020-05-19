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
import CreateIcon from "@material-ui/icons/Create";
import { IUserModelInstance } from "Models";

import { EditUserListItem } from "./EditUserListItem";

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

// interface IUserListProps {
//   user: IUserModelInstance;
// }

export const UserListItem = observer(({ user }: { user: IUserModelInstance }) => {
  const classes = useStyles();

  return user.editMode ? (
    <EditUserListItem user={user} />
  ) : (
    <ListItem>
      <ListItemText
        primary={user.name}
        secondary={user.age}
        className={classes.secondary}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={user.toggleEditMode}>
          <CreateIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
});

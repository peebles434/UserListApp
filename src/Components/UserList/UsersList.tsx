import React from "react";
import { List, Grid, makeStyles, Theme, createStyles } from "@material-ui/core";
import { observer } from "mobx-react";
import { useUserData } from "Stores";
import { UserListItem } from "./UserListItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
  }),
);

export const UsersList = observer(() => {
  const { userMapToArray } = useUserData((store) => ({
    userMapToArray: store.userMapToArray,
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <List dense={true}>
            {userMapToArray.map((user) => (
              <Grid key={user[0]}>
                <UserListItem user={user[1]} />
              </Grid>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
});

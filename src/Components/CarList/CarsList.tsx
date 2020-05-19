import React from "react";
import { List, Grid, makeStyles, Theme, createStyles } from "@material-ui/core";
import { observer } from "mobx-react";
import { useCarData } from "Stores";
import { CarListItem } from "./CarListItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
  }),
);

export const CarsList = observer(() => {
  const { carMapToArray } = useCarData((store) => ({
    carMapToArray: store.carMapToArray,
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <List dense={true}>
            {carMapToArray.map((car) => (
              <Grid key={car[0]}>
                <CarListItem car={car[1]} />
              </Grid>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
});

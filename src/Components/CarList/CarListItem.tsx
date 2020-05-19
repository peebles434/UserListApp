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
import { ICarModelInstance } from "Models";

import { EditCarListItem } from "./EditCarListItem";

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

export const CarListItem = observer(({ car }: { car: ICarModelInstance }) => {
  const classes = useStyles();

  return car.editMode ? (
    <EditCarListItem car={car} />
  ) : (
    <ListItem>
      <ListItemText
        primary={car.make}
        secondary={`${car.model} - ${car.year}`}
        className={classes.secondary}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={car.toggleEditMode}>
          <CreateIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
});

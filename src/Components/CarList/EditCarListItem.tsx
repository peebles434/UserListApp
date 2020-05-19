import React from "react";
import TextField from "@material-ui/core/TextField";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ClearIcon from "@material-ui/icons/Clear";
import DoneIcon from "@material-ui/icons/Done";
import { observer } from "mobx-react";
import { ICarModelInstance, ICarModelSnapshotOrInstance } from "Models";
import { useCarData } from "Stores";

export const EditCarListItem = observer(({ car }: { car: ICarModelInstance }) => {
  const { deleteCar, editCar } = useCarData((store) => ({
    deleteCar: store.deleteCar,
    editCar: store.editCar,
  }));

  const removeCar = (id: string) => () => {
    deleteCar(id);
  };

  const updateCar = (carDraft: ICarModelSnapshotOrInstance) => () => {
    editCar(carDraft);
    car.toggleEditMode();
  };

  return (
    <div>
      <TextField
        id="standard-basic"
        value={car.carDraft.make}
        label="Make"
        onChange={car.setMake}
      />
      <br />
      <TextField
        id="standard-basic"
        value={car.carDraft.model}
        label="Model"
        onChange={car.setModel}
      />
      <br />
      <TextField
        id="standard-basic"
        value={car.carDraft.year}
        label="Year"
        onChange={car.setYear}
      />
      <br />
      <IconButton edge="end" aria-label="delete" onClick={updateCar(car.carDraft)}>
        <DoneIcon />
      </IconButton>
      <IconButton edge="end" aria-label="delete" onClick={car.toggleEditMode}>
        <ClearIcon />
      </IconButton>
      <IconButton edge="end" aria-label="delete" onClick={removeCar(car.id)}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
});

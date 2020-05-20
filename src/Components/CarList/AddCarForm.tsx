import React, { useState, ChangeEvent } from "react";
import { useCarData } from "Stores";
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

export const AddCarForm = () => {
  const { addCar } = useCarData((store) => ({
    addCar: store.addCar,
  }));

  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carYear, setCarYear] = useState<number>(0);

  const addNewCar = (e: any) => {
    e.preventDefault();
    if (carMake && carModel && carYear) {
      addCar({
        id: random.number().toString(),
        make: carMake,
        model: carModel,
        year: carYear,
      });
      setCarMake("");
      setCarModel("");
      setCarYear(0);
    }
  };

  const onMakeChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCarMake(e.currentTarget.value);
  };

  const onModelChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCarModel(e.currentTarget.value);
  };

  const onYearChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!e.currentTarget.value.match("(^[0-9]+$|^$)")) return false;
    setCarYear(Number(e.currentTarget.value));
  };

  return (
    <div>
      <TextField
        id="standard-basic"
        value={carMake}
        label="Make"
        onChange={onMakeChange}
      />
      <br />
      <TextField
        id="standard-basic"
        value={carModel}
        label="Model"
        onChange={onModelChange}
      />
      <br />
      <TextField
        id="standard-basic"
        value={carYear || ""}
        label="Year"
        onChange={onYearChange}
      />
      <br />
      <Button variant="contained" color="primary" type="submit" onClick={addNewCar}>
        Add New Car
      </Button>
      <br />
    </div>
  );
};

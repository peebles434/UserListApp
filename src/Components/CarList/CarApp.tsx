import React from "react";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "../../App.css";
import { observer } from "mobx-react";
import { useCarData } from "Stores";
import { AddCarForm } from "./AddCarForm";
import { CarsList } from "./CarsList";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

export const CarApp = observer(() => {
  const { clearCars, numberOfCars, addFakeCars } = useCarData((store) => ({
    clearCars: store.clearCars,
    numberOfCars: store.numberOfCars,
    // TODO: Add fake data to addFakeCars function in carStore.ts
    addFakeCars: store.addFakeCars,
  }));

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <h1> User List </h1>
          {/* TODO: Create AddCarForm component */}
          <AddCarForm />
          <Button
            type="button"
            variant="contained"
            color="secondary"
            size="small"
            disabled={numberOfCars ? false : true}
            onClick={clearCars}
          >
            Reset Cars
          </Button>
          {/* TODO: Create CarsList component */}
          {<CarsList />}
          {numberOfCars ? numberOfCars : ""}
          <Button
            type="button"
            variant="outlined"
            color="secondary"
            size="small"
            disabled={numberOfCars ? true : false}
            onClick={addFakeCars}
          >
            Add Fake Cars
          </Button>
        </header>
      </div>
    </MuiThemeProvider>
  );
});

import { types, SnapshotOrInstance, Instance } from "mobx-state-tree";
import { CAR_STORE } from "../constants";
import { CarModel, ICarModelSnapshotOrInstance } from "Models";
import { random } from "faker";
import { getCars, saveCars } from "utils/localStorageHelpers";

export const CarStore = types
  // NOTE: The Stores' model is defined "carMap" and is of type "map"(not same as map function)
  .model(CAR_STORE, {
    carMap: types.map(CarModel),
  })
  // NOTE: Views is info from the model that we can display?
  .views((self) => ({
    get numberOfCars() {
      return self.carMap.size;
    },
  }))
  .views((self) => ({
    get carMapToArray() {
      return Array.from(self.carMap);
    },
  }))
  // NOTE: Actions are functions that we can call within our app.
  .actions((self) => ({
    setUsers(cars: { [id: string]: ICarModelSnapshotOrInstance }) {
      console.log(cars);
      self.carMap.merge(cars);
    },
  }))
  .actions((self) => ({
    clearCars() {
      self.carMap.clear();
      saveCars(self.carMap.toJSON());
    },
  }))
  .actions((self) => ({
    addFakeCars() {
      let tempCarsArr: { [id: string]: ICarModelSnapshotOrInstance } = {};
    },
  }))
  .actions((self) => ({
    afterCreate() {
      const tempUsers = getCars();
      if (tempUsers) {
        self.setUsers(tempUsers);
      }
    },
  }));

export type ICarStoreInstance = Instance<typeof CarStore>;
export type ICarStoreSnapshotOrInstance = SnapshotOrInstance<typeof CarStore>;

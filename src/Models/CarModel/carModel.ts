import { types, Instance, SnapshotOrInstance, SnapshotIn } from "mobx-state-tree";
import { CAR_MODEL } from "../constants";
import { ChangeEvent } from "react";

export const CarModel = types
  // NOTE: Model sets the data structure to expect
  .model(CAR_MODEL, {
    id: types.identifier,
    make: types.string,
    model: types.string,
    year: types.number,
  })
  //NOTE: Volatile is used for editing current user, it is a temp add on to the model
  .volatile((self) => ({
    carDraft: {
      id: self.id,
      make: self.make,
      model: self.model,
      year: self.year,
    },
    editMode: false,
  }))

  .views((self) => ({}))
  //NOTE: Actions are functions we can call from our app to manipulate the model info
  .actions((self) => ({
    resetVolatileState() {
      self.carDraft = {
        id: self.id,
        make: self.make,
        model: self.model,
        year: self.year,
      };
    },
  }))
  .actions((self) => ({
    toggleEditMode() {
      if (self.editMode === true) {
        self.resetVolatileState();
      }
      self.editMode = !self.editMode;
    },
  }));

export type ICarModelInstance = Instance<typeof CarModel>;
export type ICarModelSnapshot = SnapshotIn<typeof CarModel>;
export type ICarModelSnapshotOrInstance = SnapshotOrInstance<typeof CarModel>;

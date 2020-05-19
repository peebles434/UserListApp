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
  .actions((self) => {
    function saveDraft(draft: typeof self.carDraft) {
      self.carDraft = draft;
    }
    return { saveDraft };
  })
  .actions((self) => ({
    setMake(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      return self.saveDraft({
        ...self.carDraft,
        make: e.currentTarget.value,
      });
    },
  }))
  .actions((self) => ({
    setModel(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      return self.saveDraft({
        ...self.carDraft,
        model: e.currentTarget.value,
      });
    },
  }))
  .actions((self) => ({
    setYear(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      if (!e.currentTarget.value.match("(^[0-9]+$|^$)")) return false;
      return self.saveDraft({
        ...self.carDraft,
        year: Number(e.currentTarget.value),
      });
    },
  }))
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

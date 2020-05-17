import { types, Instance, SnapshotOrInstance, SnapshotIn } from "mobx-state-tree";
import { USER_MODEL } from "../constants";
import { ChangeEvent } from "react";

export const UserModel = types
  .model(USER_MODEL, {
    // NOTE: used identifierNumber for array id
    // id: types.identifierNumber,
    // NOTE: using identifier for map id
    id: types.identifier,
    name: types.string,
    age: types.number,
  })
  .volatile((self) => ({
    // NOTE: temp form for editing current user
    userDraft: {
      id: self.id,
      name: self.name,
      age: self.age,
    },
    editMode: false,
  }))
  .views((self) => ({}))
  .actions((self) => {
    function saveDraft(draft: typeof self.userDraft) {
      self.userDraft = draft;
    }
    return { saveDraft };
  })
  .actions((self) => ({
    setName(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      return self.saveDraft({
        ...self.userDraft,
        name: e.currentTarget.value,
      });
    },
  }))
  .actions((self) => ({
    setAge(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      if (!e.currentTarget.value.match("(^[0-9]+$|^$)")) return false;
      return self.saveDraft({
        ...self.userDraft,
        age: Number(e.currentTarget.value),
      });
    },
  }))
  .actions((self) => ({
    resetVolatileState() {
      self.userDraft = {
        id: self.id,
        name: self.name,
        age: self.age,
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

export type IUserModelInstance = Instance<typeof UserModel>;
export type IUserModelSnapshot = SnapshotIn<typeof UserModel>;
export type IUserModelSnapshotOrInstance = SnapshotOrInstance<typeof UserModel>;

//   .views((self) => ({}))
//   .actions((self) => ({}));

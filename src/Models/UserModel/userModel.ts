import { types, Instance, SnapshotOrInstance } from "mobx-state-tree";
import { USER_MODEL } from "../constants";

export const UserModel = types.model(USER_MODEL, {
  // NOTE: used identifierNumber for array id
  // id: types.identifierNumber,
  // NOTE: using identifier for map id
  id: types.identifier,
  name: types.string,
  age: types.number,
});

export type IUserModelInstance = Instance<typeof UserModel>;
export type IUserModelSnapshotOrInstance = SnapshotOrInstance<typeof UserModel>;

//   .views((self) => ({}))
//   .actions((self) => ({}));

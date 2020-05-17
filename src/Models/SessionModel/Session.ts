import { useContext, createContext } from "react";
import { types, Instance, onSnapshot, SnapshotOrInstance } from "mobx-state-tree";
import { SESSION_STORE, ROLES } from "Stores";

export const SessionModel = types.model(SESSION_STORE, {
  username: types.optional(types.string, "New User"),
  role: types.optional(types.string, "USER"),
});

// onSnapshot(rootStore, (snapshot) => console.log("Snapshot: ", snapshot));

export type SessionInstance = Instance<typeof SessionModel>;
export type SessionSnapshotOrInstance = SnapshotOrInstance<typeof SessionModel>;

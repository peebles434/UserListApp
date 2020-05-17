import { useContext, createContext } from "react";
import { types, Instance, onSnapshot } from "mobx-state-tree";
import { ROLES } from "Stores";

// export const SessionStore = SessionModel.create({
//   [SESSION_STORE]: types.optional(SessionModel),
// });

// onSnapshot(rootStore, (snapshot) => console.log("Snapshot: ", snapshot));

// export type SessionStoreInstance = Instance<typeof SessionStore>;
// const SessionStoreContext = createContext<null | SessionStoreInstance>(null);

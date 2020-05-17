import { useContext, createContext } from "react";
import {
  types,
  Instance,
  onSnapshot,
  cast,
  getEnv as _getEnv,
  IAnyStateTreeNode,
} from "mobx-state-tree";
import { ROOT_STORE, USER_STORE } from "./constants";
import { UserStore } from "./UserStore";

const RootStoreModel = types.model(ROOT_STORE, {
  [USER_STORE]: types.optional(UserStore, {}),
});

const getEnv: <T extends IRootStoreEnv>(target: IAnyStateTreeNode) => T = _getEnv;

export type IRootStoreInstance = Instance<typeof RootStoreModel>;

const RootStoreEnv = {
  accessToken: "",
};

export const rootStore = RootStoreModel.create({}, RootStoreEnv);

export type IRootStoreEnv = typeof RootStoreEnv;

export const RootStoreContext = createContext<null | IRootStoreInstance>(null);

export const Provider = RootStoreContext.Provider;

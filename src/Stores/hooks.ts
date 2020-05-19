import { useContext } from "react";
import { IRootStoreInstance, RootStoreContext } from "./rootStore";
import { useObserver } from "mobx-react";
import { IUserStoreInstance } from "./UserStore";
import { ICarStoreInstance } from "./CarStore";

export const useStoreFromContextHelper = <DataSelection, ContextData, MobXStore>(
  context: React.Context<ContextData>,
  storeSelector: (contextData: ContextData) => MobXStore,
  dataSelector: (store: MobXStore) => DataSelection,
) => {
  const value = useContext(context);
  if (!value) {
    throw new Error(`Context: ${context.displayName || ""} is null or undefined`);
  }
  const mobxStore = storeSelector(value);
  return useObserver(() => {
    return dataSelector(mobxStore);
  });
};

export const useStoreData = <DataSelection>(
  dataSelector: (store: IRootStoreInstance) => DataSelection,
) =>
  useStoreFromContextHelper(
    RootStoreContext,
    (contextData) => contextData!,
    dataSelector,
  );

export const useUserData = <DataSelection>(
  dataSelector: (store: IUserStoreInstance) => DataSelection,
) =>
  useStoreFromContextHelper(
    RootStoreContext,
    (contextData) => contextData!.USER_STORE,
    dataSelector,
  );

export const useCarData = <DataSelection>(
  dataSelector: (store: ICarStoreInstance) => DataSelection,
) =>
  useStoreFromContextHelper(
    RootStoreContext,
    (contextData) => contextData!.CAR_STORE,
    dataSelector,
  );

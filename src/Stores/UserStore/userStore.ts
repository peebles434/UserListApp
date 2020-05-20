import { types, SnapshotOrInstance, Instance } from "mobx-state-tree";
import { USER_STORE } from "../constants";
import { UserModel, IUserModelSnapshotOrInstance } from "Models";
import { name, random, address } from "faker";
import { getUsers, saveUsers } from "utils/localStorageHelpers";

export const UserStore = types
  .model(USER_STORE, {
    userMap: types.map(UserModel),
  })
  .volatile((self) => ({
    carMode: false,
  }))
  .views((self) => ({
    get numberOfUsers() {
      return self.userMap.size;
    },
  }))
  .views((self) => ({
    get isCarMode() {
      return self.carMode;
    },
  }))
  .views((self) => ({
    get userMapToArray() {
      return Array.from(self.userMap);
    },
  }))
  .actions((self) => ({
    setUsers(users: { [id: string]: IUserModelSnapshotOrInstance }) {
      console.log(users);
      self.userMap.merge(users);
    },
    addUser(user: IUserModelSnapshotOrInstance) {
      self.userMap.set(user.id, user);
      saveUsers(self.userMap.toJSON());
    },
    editUser(user: IUserModelSnapshotOrInstance) {
      self.userMap.set(user.id, user);
      saveUsers(self.userMap.toJSON());
    },
    deleteUser(key: string) {
      // NOTE: Maps keys will always be strings after created
      console.log(key);
      self.userMap.delete(key);
      saveUsers(self.userMap.toJSON());
    },
    clearUsers() {
      self.userMap.clear();
      saveUsers(self.userMap.toJSON());
    },
  }))
  .actions((self) => ({
    addFakeUsers() {
      let tempUsersArr: { [id: string]: IUserModelSnapshotOrInstance } = {};
      for (let i = 0; i < 5; i++) {
        let user = {
          id: random.number().toString(),
          name: name.firstName(),
          age: random.number(100),
          location: address.city(),
        };
        tempUsersArr[user.id] = user;
      }

      self.setUsers(tempUsersArr);
    },
  }))
  .actions((self) => ({
    toggleCarMode() {
      self.carMode = !self.carMode;
    },
  }))
  .actions((self) => ({
    afterCreate() {
      const tempUsers = getUsers();
      if (tempUsers) {
        self.setUsers(tempUsers);
      }
    },
  }));

export type IUserStoreInstance = Instance<typeof UserStore>;
export type IUserStoreSnapshotOrInstance = SnapshotOrInstance<typeof UserStore>;

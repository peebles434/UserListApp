import {
  types,
  cast,
  SnapshotOrInstance,
  Instance,
  resolveIdentifier,
} from "mobx-state-tree";
import { USER_STORE } from "../constants";
import { UserModel, IUserModelSnapshotOrInstance } from "Models";
import { name, random } from "faker";

export const UserStore = types
  .model(USER_STORE, {
    // users: types.array(UserModel),
    userMap: types.map(UserModel),
    // currentUser: types.safeReference(UserModel),
  })
  .views((self) => ({
    // NOTE: Array Functions
    // get numberOfUsers() {
    //   return self.users.length;
    // },
    // NOTE: Map Functions
    get numberOfUsers() {
      return self.userMap.size;
    },
  }))
  .views((self) => ({
    get userMapToArray() {
      return Array.from(self.userMap);
    },
  }))
  .actions((self) => ({
    // NOTE: Array Functions
    // setUsers(users: IUserModelSnapshotOrInstance[]) {
    //   self.users = cast(users);
    // },
    // addUser(user: IUserModelSnapshotOrInstance) {
    //   self.users.push(user);
    // },
    // deleteUser(index: number) {
    //   self.users.splice(index, 1);
    // },
    // NOTE: Map Functions
    setUsers(users: { [id: string]: IUserModelSnapshotOrInstance }) {
      console.log(users);
      self.userMap.merge(users);
    },
    addUser(user: IUserModelSnapshotOrInstance) {
      self.userMap.set(user.id, user);
    },
    deleteUser(key: string) {
      // NOTE: Maps keys will always be strings after created
      console.log(key);
      self.userMap.delete(key);
    },
    clearUsers() {
      self.userMap.clear();
    },
  }))
  // .actions((self) => ({
  //   setCurrentUser(userId: any) {
  //     self.currentUser = userId;
  //   },
  // }))
  // .actions((self) => {
  // NOTE: resolveIdentifiers Allowed us to treat location of array items similar to map
  //   function checkForUser(id: number) {
  //     return resolveIdentifier(UserModel, self, id);
  //   }
  //   return { checkForUser };
  // })
  // .actions((self) => ({
  //   getUserById(id: number) {
  //     return self.checkForUser(id);
  //   },
  // }))
  .actions((self) => ({
    afterCreate() {
      // const tempUsersArr = [];
      let tempUsersArr: { [id: string]: IUserModelSnapshotOrInstance } = {};
      for (let i = 0; i < 10; i++) {
        let user = {
          id: random.number().toString(),
          name: name.firstName(),
          age: random.number(),
        };
        // tempUsersArr.push(user);
        tempUsersArr[user.id] = user;
      }

      self.setUsers(tempUsersArr);
      // self.setCurrentUser(self.users[2].id);
    },
  }));

export type IUserStoreInstance = Instance<typeof UserStore>;
export type IUserStoreSnapshotOrInstance = SnapshotOrInstance<typeof UserStore>;

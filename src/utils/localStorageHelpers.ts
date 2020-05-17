import { IUserModelSnapshot } from "Models";

export const getUsers = () => {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : null;
};

export const saveUsers = (users: { [id: string]: IUserModelSnapshot }) => {
  localStorage.setItem("users", JSON.stringify(users));
};

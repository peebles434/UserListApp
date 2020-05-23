import { IUserModelSnapshot, ICarModelSnapshot } from "Models";

export const getUsers = () => {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : null;
};

export const saveUsers = (users: { [id: string]: IUserModelSnapshot }) => {
  localStorage.setItem("users", JSON.stringify(users));
};

export const getCars = () => {
  const cars = localStorage.getItem("cars");
  return cars ? JSON.parse(cars) : null;
};

export const saveCars = (cars: { [id: string]: ICarModelSnapshot }) => {
  localStorage.setItem("cars", JSON.stringify(cars));
};

export const getMode = () => {
  const mode = localStorage.getItem("mode");
  return mode ? JSON.parse(mode) : false;
};

export const saveMode = (mode: any) => {
  localStorage.setItem("mode", JSON.stringify(mode));
};

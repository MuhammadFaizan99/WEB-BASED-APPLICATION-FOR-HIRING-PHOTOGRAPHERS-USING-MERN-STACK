import { atom, selector } from "recoil";


export const UserState = atom({
  key: 'UserState', // unique ID (with respect to other atoms/selectors)
  default: 'hello', // default value (aka initial value)
});
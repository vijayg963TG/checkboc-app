import { createContext } from "react";
import { stateTypes } from "../types";

export const appContext = createContext<stateTypes>({
  initialvalue: [],
  updateValues: () => {},
});

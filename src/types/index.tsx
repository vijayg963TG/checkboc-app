import { Dispatch, SetStateAction } from "react";

export interface checkboxType {
  name: string;
  value: string;
  title: string;
  isChecked: boolean;
}

export interface stateTypes {
  initialvalue: checkboxType[];
  updateValues: Dispatch<SetStateAction<checkboxType[]>>;
}

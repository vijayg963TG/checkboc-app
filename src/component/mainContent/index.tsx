import { checkboxType } from "../../types";
import ItemCard from "../card";
import { useContext } from "react";
import { appContext } from "../../context";

export const MainContent = () => {
  const contextData = useContext(appContext);
  return (
    <section className="box_container">
      {contextData?.initialvalue?.map(
        (elm: checkboxType, i: number) =>
          elm.isChecked && (
            <div key={elm.title}>
              <ItemCard num={i} />
            </div>
          )
      )}
    </section>
  );
};

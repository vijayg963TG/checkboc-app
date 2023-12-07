import { checkboxType } from "../../types";
import { useContext } from "react";
import { appContext } from "../../context";

export const Header = () => {
  const contextData = useContext(appContext);

  const handleChange = (e: { target: { value: any } }) => {
    const { value } = e.target;
    contextData?.updateValues((prev: checkboxType[]) =>
      prev.map((elm: checkboxType) =>
        elm.value === value ? { ...elm, isChecked: !elm.isChecked } : elm
      )
    );
  };

  console.log(contextData);
  return (
    <div className="actionBar">
      {contextData?.initialvalue.map((elm: checkboxType, i: number) => (
        <label key={`${elm.title}_${i}`}>
          <input
            type="checkbox"
            name={elm.name}
            onChange={handleChange}
            value={elm.value}
            checked={elm.isChecked}
          />
          {elm.title}
        </label>
      ))}
    </div>
  );
};

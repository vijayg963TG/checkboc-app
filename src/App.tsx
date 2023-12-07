import { useState } from "react";
import "./App.scss";
import { checkboxType, stateTypes } from "./types";
import { checkboxList } from "./utils/constant";
import { MainContent } from "./component/mainContent";
import { appContext } from "./context";
import { Header } from "./component/header";

function App() {
  const [checkboxs, setCheckboxs] = useState<checkboxType[]>(checkboxList);
  const values: stateTypes = {
    initialvalue: checkboxs,
    updateValues: setCheckboxs,
  };
  return (
    <appContext.Provider value={values}>
      <div className="app">
        <Header />
        <MainContent />
      </div>
    </appContext.Provider>
  );
}

export default App;

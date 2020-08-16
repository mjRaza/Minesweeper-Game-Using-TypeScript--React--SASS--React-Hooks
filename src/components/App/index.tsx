import React, { useState } from "react";
import "./App.scss";
import { NumberDisplay } from "../NumberDisplay/";
import { Buttons } from "../Buttons/index";
import { generateCells } from "../../utlis/index";
const App: React.FC = () => {
  const [cells, setCells] = useState(generateCells());

  const renderCell = (): React.ReactNode => {
    return cells.map((row, indx) =>
      row.map((col, colindx) => <Buttons key={colindx} />)
    );
  };

  return (
    <div className="App">
      <div className="Header">
        <NumberDisplay value={0} />
        <div className="Face">😁 </div>
        <NumberDisplay value={23} />
      </div>
      <div className="Body">{renderCell()}</div>
    </div>
  );
};
export default App;

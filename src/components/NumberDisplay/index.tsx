import React from "react";
import "./NumberDisplay.scss";

type Props = {
  value: number;
};

export const NumberDisplay: React.FC<Props> = ({ value }) => {
  return (
    <div className="NumberDisplay">{value.toString().padStart(3, "0")}</div>
  );
};

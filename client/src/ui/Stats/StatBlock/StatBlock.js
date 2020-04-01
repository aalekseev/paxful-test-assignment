import React from "react";
import "./StatBlock.scss";

export const StatBlock = ({header, value}) => {
  const headerEl = typeof header === 'string' ? (<h4>{header}</h4>) : header;
  const valueEl = typeof value === 'string' ? (<p>{value}</p>) : value;
  return (
    <div className="block">
      {headerEl}
      {valueEl}
    </div>
  )
};

export default StatBlock;

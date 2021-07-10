import React from 'react';
import "./basic-counter-value.css";

function CounterValue({count}) {

  return (
      <div className={"counterValueWrapper"}>
        <div className={"label"}>Counter Value : {count}</div>
      </div>
  );
}
export default CounterValue;

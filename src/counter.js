import './App.css';

import React, { useState} from 'react';


function Counter({maxCount = 1000, minCount = 1}) {
  const [count, setCount] = useState(minCount);

  const handleCountChanged = (oEvent) => {
    let sValue = oEvent.target.value;
    if (sValue >= minCount && sValue <= maxCount) {
      setCount(sValue * 1);
    }
    else {
      setCount(count);
    }
  };

  const incrementCount = () => {
    setCount((prevCount) => {
      if (prevCount < maxCount) {
        return prevCount + 1;
      }
      else {
        return prevCount;
      }
    });
  };

  const decreaseCount = () => {
    setCount((prevCount) => {
      if (prevCount > minCount) {
        return prevCount - 1;
      }
      else {
        return prevCount;
      }
    });
  };
  return (
      <div className={"artBoard"}>
        <div className={"rectangle"}>
          <div className={"minus"} onClick={decreaseCount}> - </div>
          <input type={"text"} className={"count"} value={count} onChange={handleCountChanged}/>
          <div className={"plus"} onClick={incrementCount}> + </div>
        </div>
      </div>
  );
}
export default Counter;

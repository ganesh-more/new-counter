import './App.css';
import axios from 'axios';
import React, { useState} from 'react';

let timer = null;

function Counter({maxCount = 1000, minCount = 1}) {
  const [count, setCount] = useState(minCount);


  const handleOnChanged = (oEvent) => {
    let sValue = oEvent.target.value;
    if (sValue >= minCount && sValue <= maxCount) {
      setCount(sValue * 1);
      handleCountChanged(sValue * 1);
    }
    else {
      setCount(count);
      handleCountChanged(count);
    }
  };

  const handleCountChanged = (newCount) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(updateCountInDataBase.bind(this, newCount), 1000);
  };

  let updateCountInDataBase  = async(newCount) => {
    clearTimeout(timer);
    let oRequestData = {counter: newCount};
    await axios.post('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json', oRequestData);
  };


  const incrementCount = () => {
    setCount((prevCount) => {
      let newCount = prevCount;
      if (prevCount < maxCount) {
        newCount = prevCount + 1;
      }
      handleCountChanged(newCount);
      return newCount
    });
  };

  const decreaseCount = () => {
    setCount((prevCount) => {
      let newCount = prevCount;
      if (prevCount > minCount) {
        newCount = prevCount - 1;
      }
      handleCountChanged(newCount);
      return newCount;
    });
  };
  return (
      <div className={"artBoard"}>
        <div className={"rectangle"}>
          <div className={"minus"} onClick={decreaseCount}> - </div>
          <input type={"text"} className={"count"} value={count} onChange={handleOnChanged}/>
          <div className={"plus"} onClick={incrementCount}> + </div>
        </div>
      </div>
  );
}
export default Counter;

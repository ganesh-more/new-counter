import axios from 'axios';
import React, { useState} from 'react';
import Counter from "../counter/counter";
import CounterValue from "../counterValue/counter-value";
import "./basic-counter-wrapper.css"

let timer = null;

function CounterWrapper({maxCount = 1000, minCount = 1}) {
  const [count, setCount] = useState(minCount);
  const [savingInprogress, setSavingInprogress] = useState(false);


  const handleCountChanged = (newCount) => {
    if (newCount >= minCount && newCount <= maxCount) {
      setCount(newCount * 1);
    }
    else {
      setCount(count);
      return;
    }
    if (timer) {
      clearTimeout(timer)
    }
    setSavingInprogress(true);
    timer = setTimeout(updateCountInDataBase.bind(this, newCount), 1000);
  };

  let updateCountInDataBase  = async(newCount) => {
    clearTimeout(timer);
    let oRequestData = {counter: newCount};
    await axios.post('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json', oRequestData);
    setSavingInprogress(false);

  };


  return (
      <div className={"wrapperDiv"}>
        <Counter
            handleCountChanged={handleCountChanged}
            count={count}
            savingInprogress={savingInprogress}
        />
        <CounterValue count={count}/>
      </div>

  );
}
export default CounterWrapper;

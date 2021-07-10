import './counter.css';
import React from 'react';
import loader from '../../images/loading.gif'

function Counter({count, handleCountChanged, savingInprogress}) {

  const handleOnChanged = (oEvent) => {
    let sValue = oEvent.target.value;
    handleCountChanged(sValue);
  };


  const incrementCount = () => {
    handleCountChanged(count + 1);
  };

  const decrementCount = () => {
    handleCountChanged(count - 1);
  };

  const getLoader = () => {
    if (savingInprogress) {
      return (
          <>
            <div className={"spinner"}></div>
            <div id = "loader" className={"loader"}>Saving Counter value</div>
          </>
      )
    }
  };
  return (
      <div className={"artBoard"}>
        <div className={"loaderWrapper"}>
          {getLoader()}
        </div>
        <div className={"rectangle"}>
          <div className={"minus"} onClick={decrementCount}> - </div>
          <input type={"text"} className={"count"} value={count} onChange={handleOnChanged}/>
          <div className={"plus"} onClick={incrementCount}> + </div>
        </div>
      </div>
  );
}
export default Counter;

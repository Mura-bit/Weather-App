import { useState } from "react";
import "./counterApp.style.css";

const CounterApp = () => {
    const [count, setCount] = useState(0);
    
    const [secondCount, setSecondCount] = useState(0);

    const onClickHandler = () => {
        setCount(count + 10)
    }

    const onMinusHandler = () => {
        setCount(count - 10)
    }
    const onResetHandler = () => {
        setCount(0)
    }
    const onDevideHandler = () => {
        setCount(count / 2)
    }
    const onDecrementHandler = () => {
        setCount(count * 2)
    }
    const onPlusHandler = () => {
      setSecondCount(secondCount + 200);
    };
    const onSecondDecrementHandler = () => {
      setSecondCount(secondCount * 30);
    };
    const onSecondMinusHandler = () => {
      setSecondCount(secondCount - 100);
    };
    const onSecondResetHandler = () => {
      setSecondCount(0);
    };
    const onSecondDevideHandler = () => {
      setSecondCount(secondCount / 5);
    };

    return (
      <section className="counter-app">
        <div className="first">
          <button onClick={onClickHandler}>+ 10</button>
          <button onClick={onDecrementHandler}>* 2</button>
          <h1>{count}</h1>
          <button onClick={onMinusHandler}>- 10</button>
          <button onClick={onResetHandler}>Reset</button>
          <button onClick={onDevideHandler}>/ 2</button>
        </div>
        <div className="second">
          <button onClick={onPlusHandler}>+ 200</button>
          <button onClick={onSecondDecrementHandler}>* 30</button>
          <h1>{secondCount}</h1>
          <button onClick={onSecondMinusHandler}>- 150</button>
          <button onClick={onSecondResetHandler}>Reset</button>
          <button onClick={onSecondDevideHandler}>/ 5</button>
        </div>
      </section>
    );
}

export default CounterApp;
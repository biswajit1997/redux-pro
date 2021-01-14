import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Newpage() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({
      type: "INCREMENT_COUNT",
    });
  };
  const decrement = () => {
    dispatch({
      type: "DECREMENT_COUNT",
    });
  };
  return (
    <div>
      New Page
      <div>
        <div>Count</div>
        <p>{count}</p>
        <button onClick={increment}>+ click</button>
        <button onClick={decrement}>- click</button>
      </div>
    </div>
  );
}

export default Newpage;

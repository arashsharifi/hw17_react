import "../components/Qcourse6.css";
import { useState } from "react";

function Qcourse6() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="continer-counter">
      <div className="counter-box">
        <button onClick={() => setCounter(counter + 1)}>-</button>
        <p>Count:{counter}</p>
        <button onClick={() => setCounter(counter - 1)}>+</button>
      </div>
    </div>
  );
}
export default Qcourse6;

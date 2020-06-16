import React, { useState } from 'react'
import './addCart.css'

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="counterContainer">
            <button className="counterBtn"
                onClick={() => {
                    setCount(count - 1);
                }}
            >-
            </button>
            <div>{count}</div>
            <button className="counterBtn"
                onClick={() => {
                    setCount(count + 1);
                }}
            >+
            </button>
        </div>

    );
}
export default Counter;


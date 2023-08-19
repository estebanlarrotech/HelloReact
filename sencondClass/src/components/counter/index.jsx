import { useState } from "react";
import './style.css'

function Counter() {
    const [count, setCount] = useState(0);
  
    return (
      <div className='containerCount'>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

  export default Counter
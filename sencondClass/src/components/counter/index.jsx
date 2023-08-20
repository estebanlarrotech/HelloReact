import { useState } from "react";
import "./style.css";
function Counter() {
  // const [count, setCount] = useState(0);
  //     1 lugar - variavel que armazena o valor
  //     2 lugar - funcao que atualiza o estado , passando o valor novo por parametro
  //     3 - useState () que recebe como parametro o valor padrao/default
  const [count, setCount] = useState(0);
  const [valueInDouble, setValueInDouble] = useState(0);

  function incrementValue(value) {
    console.log("atualizando o estado");
    setCount(value + 1);
  }

  function decrementValue(value) {
    setCount(value - 1);
  }

  return (
    <div className="container">
      <p>
        <b>Componente Counter</b>
      </p>
      <p>You clicked {count} times</p>

      <button  type="button" className="nes-btn is-primary"
        onClick={() => {
          incrementValue(count);
          setValueInDouble((count+1) * 2);
        }}
      >
        Click to add
      </button>
      <button  type="button" className="nes-btn is-secondary"
        onClick={() => {
          decrementValue(count);
          setValueInDouble((count-1) * 2);
        }}
      >
        Click to remove
      </button>

      <div>O valor em Dobro é {valueInDouble} </div>
    </div>
  );
}

export default Counter;

//onClick={() => setCount(count + 1)}
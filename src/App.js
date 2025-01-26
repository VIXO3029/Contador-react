import React, { useState } from 'react';
import './App.css'; // Archivo CSS externo para estilos

function App() {
  // Estado para el contador
  const [count, setCount] = useState(0);

  // Funciones para manejar el incremento, decremento y reinicio
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contador</h1>
        <p className="Counter-value">{count}</p>
        <div className="Counter-buttons">
          <button className="Counter-button" onClick={increment}>
            Incrementar
          </button>
          <button
            className="Counter-button"
            onClick={decrement}
            disabled={count <= 0} // Deshabilita el botón si el valor es <= 0
          >
            Decrementar
          </button>
          <button className="Counter-button" onClick={reset}>
            Reiniciar
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;

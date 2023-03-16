import './App.css';
import { useState } from 'react';
//Que pasa si queremos que se renderice el elemento cuando la variable cambie?
//React tiene una forma de cambiar el estado de un componente 

function App(props) {

  let {contadorInicial} = props;
  //useState devuelve un array de dos elementos, el primer elemento el valor, y el segundo una función para modificar el valor
  //Utilizamos la tecnica: destructuring
  //Cada vez que actualicemos un estado se va a volver a renderizar el  componente
  //y en el dom SOLO cambiará la linea que contenga el valor
  const [contadorValue, updateContador] = useState(contadorInicial);

  setInterval(() => {
    updateContador(contadorValue + 1);
  }, 2000);
  return (
    <div className="App">
      Hello World + {contadorValue}
    </div>
  );
}

export default App;

import Jatekter from "./components/Jatekter.js";
import "./App.css";
import Model from "./modell/Model.js";
import {useState} from "react";

const tmodel = new Model()

function App() {
  const [lista,setLista] = useState([...tmodel.getLista()]);


  function katt(index) {
    console.log(index);
    tmodel.setLista(index)
    setLista([...tmodel.getLista()])
  }
  return (
    <div>
      <header>
        <h1>TICTACTOE</h1>
      </header>
      <article>
        <Jatekter katt={katt} lista={lista} />
      </article>
    </div>
  );
}

export default App;
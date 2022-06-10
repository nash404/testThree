import "./App.css";
import "axios";
import { useState } from "react";
import axios from "axios";
function App() {
  const [state, setState] = useState("some");
  const get = () => {
    axios.get(`https://testnode-heroku-app.herokuapp.com/`).then((res) => {
      const persons = res.data;
      setState(persons);
    });
  };
  return (
    <div className="App">
      <p>{state}</p>
      <button onClick={get}>Check</button>
    </div>
  );
}

export default App;

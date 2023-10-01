import "./App.css";
import { Friend } from "./component/Header/Friend/Friend";
import { Header } from "./component/Header/Header";


function App() {
  return (
    <div className="App">
      <Header id="header " />
      <Friend/>
    </div>
  );
}

export default App;

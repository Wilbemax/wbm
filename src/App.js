import "./App.css";
import { Body } from "./component/Body/Body";
import { Friend } from "./component/Header/Friend/Friend";
import { Header } from "./component/Header/Header";


function App() {
  return (
    <div className="App">
      <Header id="header " />
      <Friend/>
      <Body/>
    </div>
  );
}

export default App;

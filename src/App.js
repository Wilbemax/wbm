import "./App.css";
import { Offers } from "./component/Body/Offers/Offers";
import { Friend } from "./component/Header/Friend/Friend";
import { Header } from "./component/Header/Header";


function App() {
  return (
    <div className="App">
      <Header id="header " />
      <Friend/>
      <Offers/>
    </div>
  );
}

export default App;

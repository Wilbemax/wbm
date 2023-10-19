import "./App.css";
import { Body } from "./component/Body/Body";
import { Footer } from "./component/Footer/Footer";
import { Friend } from "./component/Header/Friend/Friend";
import { Header } from "./component/Header/Header";


function App() {
  return (
    <div className="App">
      <Header />
      <Friend/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;

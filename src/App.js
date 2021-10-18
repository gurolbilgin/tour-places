import "./App.css";
import Cards from "./components/cards/Cards";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Cards />
    </div>
  );
}

export default App;

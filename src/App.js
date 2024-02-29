import "./App.css";

import CurrencyApi from "./components/Currency";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <CurrencyApi />
    </div>
  );
}

export default App;

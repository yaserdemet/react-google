import styles from "../src/Sass/App.scss";
import "./App.css";
import AppRouter from "./pages/AppRouter";
import SearchValue from "./contextApi/SearchValue"

function App() {
  return (
    <SearchValue>
      <div className="App">
        <AppRouter />
      </div>
    </SearchValue>
  );
}

export default App;

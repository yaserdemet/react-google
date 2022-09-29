import "./App.css";
import AppRouter from "./pages/AppRouter";
import AppStyle from "../src/Sass/App.scss";
import ContextFile, { useConsumeContext } from "./context/ContextFile";

function App() {
  
  return (
    <ContextFile>
      <div >
        <AppRouter />
      </div>
    </ContextFile>
  );
}

export default App;

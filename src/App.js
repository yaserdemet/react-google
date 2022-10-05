import "./App.css";
import AppRouter from "./pages/AppRouter";
import AppStyle from "../src/Sass/App.scss";
import ContextFile, { useConsumeContext } from "./context/ContextFile";
import { Provider } from "react-redux";
import {createStore} from "redux"
import reducer from "./redux";

function App() {
  const store = createStore(reducer)
  return (
    <Provider store={store}>
      <ContextFile>
        <AppRouter />
      </ContextFile>
    </Provider>
  );
}

export default App;

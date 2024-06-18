import { BrowserRouter } from "react-router-dom";
import "./App.css";
import TodoApp from "./components/TodoApp";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <TodoApp />
      </BrowserRouter>
    </>
  );
};

export default App;

import "./App.css";
import Body from "./components/Body";
import Nav from "./components/Nav";
// import Todo from "./components/Todo";

function App() {
  return (
    <>
      <div className="app">
        <Nav />
        {/* <Todo /> */}
        <Body />
      </div>
    </>
  );
}

export default App;

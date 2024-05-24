import "./App.css";
import { AuthProvider } from "./components/AuthContext";
import Body from "./components/Body";
import Nav from "./components/Nav";
// import Todo from "./components/Todo";

function App() {
  return (
    <>
      <AuthProvider>
        <div className="app">
          <Nav />
          <Body />
        </div>
      </AuthProvider>
    </>
  );
}

export default App;

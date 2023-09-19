import "./App.css";
import { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <div className="App">{isLoggedIn ? <Home /> : <Login />}</div>;
}

export default App;

import { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { LoginContext } from "./components/Context/LoginContext";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, updateLogin] = useState(false);
  return (
    <div className="App">
      <LoginContext.Provider value={{ isLoggedIn, updateLogin }}>
        {isLoggedIn ? <Home /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;

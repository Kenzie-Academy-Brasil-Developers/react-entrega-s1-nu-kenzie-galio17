import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Homepage from "./components/Homepage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Homepage setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;

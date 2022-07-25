import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Homepage from "./components/Homepage";
import Global from "./components/styles/global";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Global />
      {isLoggedIn ? (
        <Dashboard setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Homepage setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;

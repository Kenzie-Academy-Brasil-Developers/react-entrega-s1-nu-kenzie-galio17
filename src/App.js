import { useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Homepage setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default App;

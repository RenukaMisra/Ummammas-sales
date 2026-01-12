import React, { useState } from "react";
import SimpleLogin from "./components/SimpleLogin";
import Dashboard from "./components/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <Dashboard onLogout={() => setIsLoggedIn(false)} />
  ) : (
    <SimpleLogin onLogin={() => setIsLoggedIn(true)} />
  );
}

export default App;

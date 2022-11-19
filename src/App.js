import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <p className="mt-2">
          ✌️ This website was coded by Nataliia Mykhalevych, and is
          <a href="https://github.com/Nata010424/React-weather-app">
            {" "}
            open-sourced
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;

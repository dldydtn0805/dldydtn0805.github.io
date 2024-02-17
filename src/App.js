import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <HomePage></HomePage>
      </div>
    </BrowserRouter>
  );
}

export default App;

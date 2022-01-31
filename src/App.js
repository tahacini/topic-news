import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import News from "./components/News";

function App() {
  const [country, setCountry] = useState("us");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

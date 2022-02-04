import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import News from "./components/News";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  const [category, setCategory] = useState("home");
  const [currentPage, setCurrentPage] = useState(1);

  const changeCategory = (cate) => {
    setCategory(cate);
    setCurrentPage(1);
  };

  return (
    <BrowserRouter>
      <Nav setCategory={changeCategory} />
      <Routes>
        <Route
          path="/"
          element={
            <News
              category={category}
              setCategory={setCategory}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        >
          <Route path={":cate"} element={<></>}>
            <Route path=":page" element={<></>} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

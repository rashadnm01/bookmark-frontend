import "./App.css";
import React, { useState } from "react";

// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
// IMPORT PAGES
import Index from "./pages/index";
import Show from "./pages/show";

function App() {
  const [bookmark, setBookmark] = useState();
  const URL = "";

  const getBookmark = async () => {
    const response = await fetch(URL);
    const data = response.json();
    setBookmark(data);
  };
  const createBookmark = async (mark) => {
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mark),
    });
    getBookmark();
  };
  const updateBookmark = async (mark, id) => {
    await fetch(URL + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mark),
    });
    getBookmark();
  };
  const deleteBookmark = async (id) => {
    await fetch(URL + id, {
      method: "delete",
    });
    getBookmark();
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Index bookmark={bookmark} createBookmark={createBookmark} />
          }
        />
        <Route
          path="/:id"
          element={
            <Show
              bookmark={bookmark}
              updateBookmark={updateBookmark}
              deleteBookmark={deleteBookmark}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

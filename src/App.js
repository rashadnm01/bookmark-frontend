import "./App.css";
import React, { useState } from "react";

// IMPORT COMPONENTS
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
// IMPORT PAGES
import Index from "./pages/index";
import Show from "./pages/show";
import Bookmark from "./components/Bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState(null);
  const URL = "https://bookmark-backennd.herokuapp.com/";

  const getBookmarks = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setBookmarks(data);
  };
  const createBookmarks = async (bookmark) => {
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookmark),
    });
    getBookmarks();
  };
  const updateBookmarks = async (bookmark, id) => {
    await fetch(URL + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookmark),
    });
    getBookmarks();
  };
  const deleteBookmarks = async (id) => {
    await fetch(URL + id, {
      method: "delete",
    });
    getBookmarks();
  };

  useEffect(() => {
    getBookmarks();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Index bookmarks={bookmarks} createBookmarks={createBookmarks} />
          }
        />
        <Route
          path="/bookmarks/:id"
          element={
            <Show
              bookmarks={bookmarks}
              updateBookmarks={updateBookmarks}
              deleteBookmarks={deleteBookmarks}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

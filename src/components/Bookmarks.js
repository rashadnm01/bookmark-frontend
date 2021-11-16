import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/index";
import Show from "../pages/show";

const Bookmarks = (props) => {
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
    <main>
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
    </main>
  );
};

export default Bookmarks;

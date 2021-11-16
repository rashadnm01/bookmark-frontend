import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Show = (props) => {
  // grab the navigate function
  const navigate = useNavigate();
  // get the params object
  const params = useParams();
  // grab the id from params
  const id = params.id;
  // grab bookmarks from props
  const bookmarks = props.bookmarks;
  // create state for form
  const [editForm, setEditForm] = useState({});
  // useEffect to set state to the existing site, when the data is available
  useEffect(() => {
    if (props.bookmarks) {
      const bookmark = bookmarks.find((p) => p._id === id);
      setEditForm(bookmark);
    }
  }, [props.bookmarks]);

  if (props.bookmarks) {
    // grab the target site from the bookmarks array
    const bookmark = bookmarks.find((p) => p._id === id);

    // handleChange function for form
    const handleChange = (event) => {
      // create a copy of the state
      const newState = { ...editForm };
      // update the newState
      newState[event.target.website] = event.target.value;
      // update the state
      setEditForm(newState);
    };

    // handleSubmit for form
    const handleSubmit = (event) => {
      // prevent the refresh
      event.preventDefault();
      // pass the form data to updateBookmarks
      props.updateBookmarks(editForm, bookmark._id);
      // redirect bookmarks back to index
      navigate("/");
    };
    const removeBookmark = () => {
      props.deleteBookmarks(bookmark._id);
      navigate("/");
    };
    const form = (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.website}
          name="website"
          placeholder="Website"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.link}
          name="link"
          placeholder="Link"
          onChange={handleChange}
        />

        <input type="submit" value="Update Website" />
      </form>
    );

    return (
      <div className="site">
        <h1>{bookmark.website}</h1>
        <h2>{bookmark.link}</h2>
        {form}
        <button onClick={removeBookmark}>DELETE WEBSITE</button>
      </div>
    );
  } else {
    return <h1>No Website</h1>;
  }
};

export default Show;

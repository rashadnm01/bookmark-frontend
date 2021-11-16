import { useState } from "react";
import { Link } from "react-router-dom";

const Index = (props) => {
  // state to hold form data
  const [newForm, setNewForm] = useState({
    website: String,
    link: String,
  });

  //handleChange function to sync input with state
  const handleChange = (event) => {
    // make a copy of state
    const newState = { ...newForm };
    // update the newState
    newState[event.target.website] = event.target.value;
    // update the state
    setNewForm(newState);
  };
  // handleSubmit function for when form is submitted
  const handleSubmit = (event) => {
    // prevent the page from refreshing
    event.preventDefault();
    // pass the form data to createBookmarks function
    props.createBookmarks(newForm);
    // reset the form to empty
    setNewForm({
      website: String,
      link: String,
    });
  };

  const form = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newForm.website}
        name="website"
        placeholder="Website"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.link}
        name="link"
        placeholder="Link"
        onChange={handleChange}
      />

      <input type="submit" value="Bookmark Website" />
    </form>
  );

  if (props.bookmarks) {
    return (
      <section>
        {form}
        {props.bookmarks.map((bookmark) => {
          return (
            <div key={bookmark._id} className="bookmark">
              <Link to={`/bookmarks/${bookmark._id}`}>
                <h1>{bookmark.website}</h1>
              </Link>
              <h3>{bookmark.link}</h3>
            </div>
          );
        })}
      </section>
    );
  } else {
    return (
      <section>
        {form}
        <h1>Loading...</h1>
      </section>
    );
  }
};

export default Index;

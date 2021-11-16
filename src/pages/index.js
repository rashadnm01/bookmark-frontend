import { useState } from "react";
import { Link } from "react-router-dom";

const Index = (props) => {
  // state to hold form data
  const [newForm, setNewForm] = useState({
    website: "",
    link: "",
  });

  //handleChange function to sync input with state
  const handleChange = (event) => {
    const newState = { ...newForm };
    newState[event.target.name] = event.target.value;
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
      website: "",
      link: "",
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

      <input class="btn btn-success" type="submit" value="Bookmark Website" />
    </form>
  );

  if (props.bookmarks) {
    return (
      <section>
        {form}
        {props.bookmarks.map((bookmark) => {
          return (
            <div key={bookmark._id} className="bookmark">
              <Link className="link-dark" to={`/bookmarks/${bookmark._id}`}>
                <h2>{bookmark.website}</h2>
                <h3>{bookmark.link}</h3>
              </Link>
            </div>
          );
        })}
      </section>
    );
  } else {
    return (
      <section>
        {form}
        <h1 className="loading">Loading...</h1>
      </section>
    );
  }
};

export default Index;

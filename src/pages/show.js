import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Show = (props) => {
  // grab the navigate function
  const navigate = useNavigate();
  // get the params object
  const params = useParams();
  // grab the id from params
  const id = params.id;
  // grab sites from props
  const websites = props.websites;
  // create state for form
  const [editForm, setEditForm] = useState({});
  // useEffect to set state to the existing person, when the data is available
  useEffect(() => {
    if (props.websites) {
      const site = websites.find((p) => p._id === id);
      setEditForm(site);
    }
  }, [props.websites]);

  if (props.websites) {
    // grab the target person from the people array
    const site = websites.find((p) => p._id === id);

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
      // pass the form data to updatePeople
      props.updateWebsites(editForm, site._id);
      // redirect people back to index
      navigate("/");
    };
    const removeSite = () => {
      props.deleteWebsites(site._id);
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
        <h1>{site.website}</h1>
        <h2>{site.link}</h2>
        {form}
        <button onClick={removeSite}>DELETE WEBSITE</button>
      </div>
    );
  } else {
    return <h1>No Website</h1>;
  }
};

export default Show;

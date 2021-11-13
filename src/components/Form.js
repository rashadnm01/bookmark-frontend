import React, { useState } from "react";

const Form = (props) => {
  const [formData, setFormData] = useState({ website: "", link: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
    props.getBookmark(formData);
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>Website: </label>
        <input
          type="text"
          value={formData.website}
          onChange={(event) => setFormData(event.target.value)}
        />
        <label>Link: </label>
        <input
          type="text"
          value={formData.link}
          onChange={(event) => setFormData(event.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default Form;

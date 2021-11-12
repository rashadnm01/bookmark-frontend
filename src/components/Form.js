import React, { useState } from "react";

const Form = (props) => {
  const [formData, setFormData] = useState();
  const [formData2, setFormData2] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    props.getBookmark(formData, formData2);
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>Website: </label>
        <input
          type="text"
          value={formData}
          onChange={(event) => setFormData(event.target.value)}
        />
        <label>Link: </label>
        <input
          type="text"
          value={formData2}
          onChange={(event) => setFormData2(event.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default Form;

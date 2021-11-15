import React from "react";

export default function Bookmarks(props) {
  return (
    <section>
      <a href={props.link}>{props.website}</a>
    </section>
  );
}

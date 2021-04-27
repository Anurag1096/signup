import React from "react";
import "./Container.css";
const Container = (props) => {
  return (
    <div className="ui container">
      <div className="content">
        <div className="sizee">{props.children} </div>
      </div>
    </div>
  );
};
export default Container;

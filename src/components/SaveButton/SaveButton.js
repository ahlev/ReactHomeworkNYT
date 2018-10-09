import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
const SaveButton = ({ type = "default", className, children, onClick }) => (
  <button
    onClick={onClick}
    className={["btn btn-lg", `btn-${type}`, className].join(" ")}
  >
    {children}
    
  </button>
);

export default SaveButton;

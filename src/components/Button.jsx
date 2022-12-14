import React from "react";
import "./Button.css";

function Button({ title, variation }) {
  return <button className={`${variation}-btn btn-style`}>{title}</button>;
}

export default Button;

import React from "react";
import Icon from "./Icon";

export default () => (
  <div
    style={{
      alignSelf: "center",
      textTransform: "uppercase",
      textAlign: "center",
      opacity: 0.5
    }}
  >
    <Icon icon="spinner" animate />
    <p>
      Looking outside for you...
      <br />
      One sec
    </p>
  </div>
);

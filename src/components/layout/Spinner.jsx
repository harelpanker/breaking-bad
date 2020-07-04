import React from "react";
import loading from "../../images/loading.gif";

const Spinner = () => {
  return (
    <img
      src={loading}
      alt='Loading'
      style={{ width: 200, margin: "auto", display: "block" }}
    />
  );
};

export default Spinner;

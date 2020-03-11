import React from "react";

const EditBox = ({ props }) => {
  const toggleForms = () => {
    if (props.politicasVisible === true)
      return <h1>politicasVisible es true</h1>;
    else if (props.telesVisible === true) return <h1>telesVisible es true</h1>;
    else if (props.desarrollosVisible === true)
      return <h1>desarrollosVisible es true</h1>;
    else return "";
  };

  return (
    <div className="feature-banner">
      <div className="feature-banner-box">{toggleForms()}</div>
    </div>
  );
};

export default EditBox;

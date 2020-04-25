import React from "react";
import PoliticasForm from "../forms/PoliticasForm";
import TelesForm from "../forms/TelesForm";
import DesarrollosForm from "../forms/DesarrollosForm";

const EditBox = ({ props }) => {
  const toggleForms = () => {
    if (props.politicasVisible === true) return <PoliticasForm />;
    else if (props.telesVisible === true) return <TelesForm />;
    else if (props.desarrollosVisible === true) return <DesarrollosForm />;
    else return "";
  };

  return (
    <div className="feature-banner">
      <div className="feature-banner-box">{toggleForms()}</div>
    </div>
  );
};

export default EditBox;

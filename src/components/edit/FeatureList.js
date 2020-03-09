import React from "react";

import { ReactComponent as PoliticasImg } from "../../assets/images/img1.svg";
import { ReactComponent as teleImg } from "../../assets/images/img2.svg";
import { ReactComponent as desarrolloImg } from "../../assets/images/img3.svg";
import FeatureItem from "../edit/FeatureItem";

const FeatureList = ({ handleClick }) => {
  return (
    <div className="feature-list">
      <FeatureItem
        text="Políticas de seguridad"
        ImgComponent={PoliticasImg}
        handleClick={handleClick.bind(this, "politicasVisible")}
      />

      <FeatureItem
        text="Seguridad en las telecomunicaciones"
        ImgComponent={teleImg}
        handleClick={handleClick.bind(this, "telesVisible")}
      />

      <FeatureItem
        text="Adquisición, desarrollo y mantenimiento"
        ImgComponent={desarrolloImg}
        handleClick={handleClick.bind(this, "desarrollosVisible")}
      />
    </div>
  );
};

export default FeatureList;

import React from "react";
import "../assets/styles/ViewStyles.sass";

import FeatureList from "../components/edit/FeatureList";
import EditBox from "../components/edit/EditBox";

class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      politicasVisible: false,
      telesVisible: false,
      desarrollosVisible: false
    };
  }

  toggleViews(currentKey) {
    Object.keys(this.state).forEach(key => {
      this.setState({
        [key]: false
      });
    });
    this.setState({
      [currentKey]: !this.state[currentKey]
    });
  }

  render() {
    return (
      <div className="content">
        <div className="feature-section">
          <FeatureList handleClick={this.toggleViews.bind(this)} />
          <EditBox props={this.state} />
        </div>
      </div>
    );
  }
}

export default Edit;

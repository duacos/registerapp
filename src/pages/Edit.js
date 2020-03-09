import React from "react";
import "../assets/styles/ViewStyles.sass";

import FeatureList from "../components/edit/FeatureList";

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
    console.log(this.state);
    return (
      <div className="content">
        <div className="feature-section">
          <FeatureList handleClick={this.toggleViews.bind(this)} />
        </div>
      </div>
    );
  }
}

export default Edit;

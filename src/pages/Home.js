import React from "react";
import "../assets/styles/HomeStyles.sass";
import * as empresasActions from "../actions/empresasActions";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    if (!this.props.data.length) this.props.loadData();
  }

  listEmpresas() {
    return this.props.data.map((empresa) => {
      return (
        <div key={empresa.id} className="itemList-item">
          <h1>{empresa.name}</h1>
          {empresa.description}
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div className="itemList">{this.listEmpresas()}</div>
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.empresasReducer;
};

export default connect(mapStateToProps, empresasActions)(Home);

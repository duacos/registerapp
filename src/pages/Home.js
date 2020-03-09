import React from "react";
import axios from "axios";
import "../assets/styles/HomeStyles.sass";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      empresas: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:1500/api/v1/empresas").then(response => {
      this.setState({
        empresas: response.data
      });
    });
  }

  listEmpresas() {
    return this.state.empresas.map(empresa => {
      return (
        <div key={empresa.id} className="itemList-item">
          <h1>{empresa.name}</h1>
          {empresa.description}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <div className="itemList">{this.listEmpresas()}</div>
      </div>
    );
  }
}

export default Home;

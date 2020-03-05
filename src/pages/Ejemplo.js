import React from "react";
import axios from "axios";

class Ejemplo extends React.Component {
  componentDidMount() {
    axios
      .get("http://localhost:1500/api/v1/empresas")
      .then(empresas => console.log(empresas));
  }

  render() {
    return (
      <div className="App">
        <h1>Hola desde ejemplo</h1>
      </div>
    );
  }
}

export default Ejemplo;

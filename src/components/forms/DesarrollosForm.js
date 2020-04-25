import React from "react";
import SelectForm from "./SelectForm";

class DesarrollosForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      politicas: "No realizado",
      entornos: "No realizado",
      funcionalidad: "No realizado",
      aceptacion: "No realizado",
    };
  }

  handleSelect(key) {
    return (e) => {
      this.setState({
        [key]: e.target.value,
      });
    };
  }

  componentDidUpdate() {
    this.sendChanges();
  }

  sendChanges() {
    console.log(this.state);
  }
  render() {
    return (
      <React.Fragment>
        <SelectForm
          description="Política de desarrollo seguro de software"
          value="No realizado"
          handleSelect={this.handleSelect("politicas")}
        />

        <SelectForm
          description="Seguridad en entornos de desarrollo"
          value="No realizado"
          handleSelect={this.handleSelect("entornos")}
        />

        <SelectForm
          description="Pruebas de funcionalidad durante el desarrollo de los sistemas"
          value="No realizado"
          handleSelect={this.handleSelect("funcionalidad")}
        />

        <SelectForm
          description="Pruebas de aceptación"
          value="No realizado"
          handleSelect={this.handleSelect("aceptacion")}
        />
      </React.Fragment>
    );
  }
}

export default DesarrollosForm;

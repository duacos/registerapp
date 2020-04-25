import React from "react";
import SelectForm from "./SelectForm";

class TelesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      controles_red: "No realizado",
      mecanismos_seg: "No realizado",
      segregacion_redes: "No realizado",
      procedimientos: "No realizado",
      intercambio: "No realizado",
      mensajeria: "No realizado",
      confidencialidad: "No realizado"
    };
  }

  handleSelect(key) {
    return e => {
      this.setState({
        [key]: e.target.value
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
          description="Controles de red"
          value="No realizado"
          handleSelect={this.handleSelect("controles_red")}
        />

        <SelectForm
          description="Mecanismos de seguridad asociados a servicios en red"
          value="No realizado"
          handleSelect={this.handleSelect("mecanismos_seg")}
        />

        <SelectForm
          description="Segregación de redes"
          value="No realizado"
          handleSelect={this.handleSelect("segregacion_redes")}
        />

        <SelectForm
          description="Políticas y procedimientos de intercambio de información"
          value="No realizado"
          handleSelect={this.handleSelect("procedimientos")}
        />

        <SelectForm
          description="Acuerdos de intercambio"
          value="No realizado"
          handleSelect={this.handleSelect("intercambio")}
        />

        <SelectForm
          description="Mensajería electrónica"
          value="No realizado"
          handleSelect={this.handleSelect("mensajeria")}
        />

        <SelectForm
          description="Acuerdos de confidencialidad y secreto"
          value="No realizado"
          handleSelect={this.handleSelect("confidencialidad")}
        />
      </React.Fragment>
    );
  }
}

export default TelesForm;

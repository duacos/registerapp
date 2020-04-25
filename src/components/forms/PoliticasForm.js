import React from "react";
import SelectForm from "./SelectForm";

class PoliticasForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      conjunto_politicas: "No Realizado",
      revision_politicas: "No realizado"
    };
  }
  selectConjuntoPoliticas(e) {
    this.setState({
      conjunto_politicas: e.target.value
    });
  }

  selectRevisionPoliticas(e) {
    this.setState({
      revision_politicas: e.target.value
    });
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
          description="Conjunto de politicas para la seguridad de la información"
          value="No realizado"
          handleSelect={this.selectConjuntoPoliticas.bind(this)}
        />

        <SelectForm
          description="Revisión de las politcas para la seguridad de la información"
          value="No realizado"
          handleSelect={this.selectRevisionPoliticas.bind(this)}
        />
      </React.Fragment>
    );
  }
}

export default PoliticasForm;

import React from 'react';
import './App.css';

export class Nome extends React.Component {
  state = {
    nome: ""
  }

  onChangeName = (event) => {
    this.setState({valorNome: event.target.value})
  }

  render() {
    console.log("Nome do remetente: ", this.state.nome)

    return (
      <div>
        <input
          value={this.state.valorNome}
          onChangeName={this.onChangeName}
          placeholder={"Usuário"}
        />
      </div>
    )
  }
}
export default Nome;

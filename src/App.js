import Contatos from "./Components/Contatos";
import Header from "./Components/Header";
import Book  from "./Assets/ic-book.svg"
import React, { Component } from 'react'
class App extends Component {
  render() {
    const listaContatos = localStorage.getItem('listaContatos');
    if (listaContatos !== null && listaContatos !== "[]") {
      return (
        <>
          <Header />
          <Contatos/>
        </>
      );
    }
    return (
      <>
        <Header />
        <div style={styles.Contatos}>
          <img src={Book} />
          <p>Nenhum contato foi criado ainda.</p>
        </div>
      </>
    );
  }
}

const styles ={
  Contatos: {
    textAlign: 'center',
    paddingTop: '6rem',
  }
}

export default App;

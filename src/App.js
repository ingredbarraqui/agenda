import Contatos from "./Components/Contatos";
import Header from "./Components/Header";
import Book  from "./Assets/ic-book.svg"
import React, {useState} from 'react'

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

export const App = () => {
  const [listaContatos, setListaContatos] = useLocalStorage("listaContatos", "");
    if (listaContatos !== null && listaContatos.length > 0) {
      return (
        <>
          <Header listaContatos={listaContatos} setListaContatos={(listaContatos) => {setListaContatos(listaContatos)} } />
          <Contatos listaContatos={listaContatos} setListaContatos={(listaContatos) => {setListaContatos(listaContatos)} }/>
        </>
      );
    }
    return (
      <>
        <Header listaContatos={listaContatos} setListaContatos={(listaContatos) => {setListaContatos(listaContatos)} } />
        <div style={styles.Contatos}>
          <img src={Book} />
          <p>Nenhum contato foi criado ainda.</p>
        </div>
      </>
    );
}

const styles ={
  Contatos: {
    textAlign: 'center',
    paddingTop: '6rem',
  }
}

export default App;
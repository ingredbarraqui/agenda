import React from 'react'

const ModalExcluir = (props) => {
    
    const handleExcluir = (e) => {
        e.preventDefault();
        let listaContatos = JSON.parse(localStorage.getItem("listaContatos"));
        listaContatos.splice(props.index, 1)
        localStorage.setItem("listaContatos", JSON.stringify(listaContatos))
        window.location.reload();
    }

  return (
      <>
          <div><p>Excluir Contato</p></div>
          <div className="form">Deseja realmente excluir o contato?</div>
          <div className="btns-modal">
            <button onClick={props.onClose} className="cancelar" >Cancelar</button>
            <button onClick={handleExcluir} className="delete" >Excluir</button>
          </div>
      </>
  )
}

export default ModalExcluir
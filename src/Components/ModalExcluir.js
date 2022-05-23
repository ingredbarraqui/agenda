import React from 'react'

const ModalExcluir = (props) => {

    const handleExcluir = (e) => {
        e.preventDefault();
        let listaContatos = JSON.parse(localStorage.getItem("listaContatos"));
        listaContatos.splice(props.index, 1)
        props.changeLista(listaContatos)
        props.onClose()
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
import React, {useState} from 'react'
import styles from "./ModalForm.css"
import InputMask from "react-input-mask";

const ModalForm = (props) => {

    const padrao = { nome: "", email:"", tel:"", destaque: false }
    const [contato, setContato] = useState(props.editar != null ? props.editar :  padrao )

    const [contatoNome, setContatoNome] = useState(contato.nome)
    const [contatoEmail, setContatoEmail] = useState(contato.email)
    const [contatoTel, setContatoTel] = useState(contato.tel)

    const [ativo, setAtivo] = useState("disabled")

    const handleAtivo = (e) => {

        const nome = document.querySelector("#formEditar input[name=nome]").value;
        const email = document.querySelector("#formEditar input[name=email]").value;
        const tel = document.querySelector("#formEditar input[name=tel]").value;

        if (nome == "" || email == "" || tel == "") {
            setAtivo("disabled")
        } else {
            setAtivo("")
        }
    }

    const handleChange = (e) => {
        if (e.target.name == "nome")
            setContatoNome(e.target.value)
        else if (e.target.name == "email")
            setContatoEmail(e.target.value)
        else if (e.target.name == "tel")
            setContatoTel(e.target.value)
        handleAtivo(e)
    }

    const handleSubmit = (e, index) => {
        e.preventDefault();

        const nome = e.target.elements.nome.value;
        const email = e.target.elements.email.value;
        const tel = e.target.elements.tel.value;
        editarContato(nome, email, tel, props.editar)
    }

    const editarDestaque = (index, destaque) => {

        let listaContatos = localStorage.getItem("listaContatos");

        if (listaContatos == null) {
            listaContatos = []
        } else {
           listaContatos = JSON.parse(listaContatos)
        }

        let contato = listaContatos[index];
        contato.destaque = destaque;
        listaContatos[index] = contato;
        props.changeLista(listaContatos)
    }

    const editarContato = (nome, email, tel, editar = null, destaque = false) => {
        setContatoNome(nome);
        setContatoEmail(email);
        setContatoTel(tel);

        let listaContatos = localStorage.getItem("listaContatos");

        if (listaContatos == null) {
            listaContatos = []
        } else {
           listaContatos = JSON.parse(listaContatos)
        }

        let contato = {
            nome: contatoNome || nome,
            email: contatoEmail || email,
            tel: contatoTel || tel
        }

        if (editar) {
            contato.destaque = destaque;
            listaContatos[editar.index] = contato;
        } else {
            contato.destaque = true;
            listaContatos.push(contato)
            setTimeout(() => {
                editarDestaque((listaContatos.length - 1), false)
            }, "10000")
        }

        props.changeLista(listaContatos)
        props.onClose()
    }
  return (
      <>
        <p>{props.titulo}</p>
        <form id="formEditar" onSubmit={handleSubmit}>
            <div className="form">
            <label>Nome
                <input
                    value={contatoNome}
                    type="text"
                    name='nome'
                    placeholder='nome'
                    required
                    onChange={handleChange}
                  />
            </label>
            <label>E-mail
                  <input
                    value={contatoEmail}
                    type="email"
                    name='email'
                    placeholder='email'
                    required
                    onChange={handleChange}
                  />
            </label>
            <label>Telefone
                  <InputMask
                    value={contatoTel}
                    type="tel"
                    name='tel'
                    mask="(99) 99999-9999"
                    placeholder='Telefone'
                    required
                    onChange={handleChange}
                  />
              </label>
            </div>
            <div className="btns-modal">
                <button className="cancelar" onClick={props.onClose}>Cancelar</button>
                <input className="salvar" type="submit" disabled={ativo}/>
            </div>
        </form>
    </>
  )
}
export default ModalForm
import React, {useState} from 'react'
import styles from "./ModalForm.css"

const ModalForm = (props) => {
    
    const padrao = { nome: "", email:"", tel:"" }
    const [contato, setContato] = useState(props.editar != null ? props.editar :  padrao )

    const [contatoNome, setContatoNome] = useState("")
    const [contatoEmail, setContatoEmail] = useState("")
    const [contatoTel, setContatoTel] = useState("")

    const [ativo, setAtivo] = useState("disabled")

    const handleChange = (e) => {
        if (e.target.name == "nome")
            setContatoNome(e.target.value)
        else if (e.target.name == "email")
            setContatoEmail(e.target.value)
        else if (e.target.name == "tel")
            setContatoTel(e.target.value)
        
        if (contatoNome == "") {
            setAtivo("disabled")
        } else {
            setAtivo("")
        }
    }
    
    const handleSubmit = (e, index) => {
        e.preventDefault(); 
        
        const nome = e.target.elements.nome.value;
        const email = e.target.elements.email.value;
        const tel = e.target.elements.tel.value;
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

        if (props.editar) {
            listaContatos[props.editar.index] = contato
        } else {
            listaContatos.push(contato)
        }

        localStorage.setItem('listaContatos', JSON.stringify(listaContatos))
        // props.onClose()
        window.location.reload()
    }
  return (
      <>
        <p>{props.titulo}</p>
        <form onSubmit={handleSubmit}>
            <div className="form">
            <label>Nome
                <input
                    value={contatoNome === "" ? contato.nome : contatoNome}
                    type="text"
                    name='nome'
                    placeholder='nome'
                    required
                    onChange={handleChange}
                  />
            </label>
            <label>E-mail
                  <input
                    value={contatoEmail === "" ? contato.email : contatoEmail}
                    type="email"
                    name='email'
                    placeholder='email'
                    required
                    onChange={handleChange}
                  />
            </label>
            <label>Telefone
                  <input
                    value={contatoTel === "" ? contato.tel : contatoTel}
                    type="tel"
                    name='tel'
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
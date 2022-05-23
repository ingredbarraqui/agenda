import React, {useState} from 'react'
import styles from "./Contato.css"
import ItemContato from './ItemContato'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ModalForm from './ModalForm';

const Contatos = (props) => {

  const [open, setOpen] = useState(false);
  const [editar, setEditar] = useState()

  const handleOpen = (item) => {
    setEditar(item)
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  let itensContato = props.listaContatos.map((item, index) => {
    item.index = index;
    return <ItemContato
      nome={item.nome}
      email={item.email}
      tel={item.tel}
      key={index}
      index={index}
      destaque={item.destaque || false}
      onEdit={() => handleOpen(item)}
      changeLista={(listaContatos) => props.setListaContatos(listaContatos)}
      onClose={handleClose} />
  })

  return (
    <>
      <Modal open={open} onClose={handleClose}>
      <Box className="modal">
          <ModalForm
            titulo="Editar contato"
            onClose={handleClose}
            changeLista={(listaContatos) => props.setListaContatos(listaContatos)}
            listaContatos={props.listaContatos}
            editar={editar} />
      </Box>
    </Modal>
      <table className="contato">
      <thead>
        <tr>
          <th>Contato</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        {itensContato}
      </tbody>
    </table>
    </>
  )
}

export default Contatos
import React, {useState} from 'react'
import styles from "./Contato.css"
import ItemContato from './ItemContato'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ModalForm from './ModalForm';

const Contatos = (props) => {

  const [open, setOpen] = React.useState(false);
  const [editar, setEditar] = useState()

  const handleOpen = (item) => {
    setEditar(item)
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  let listaContatos = localStorage.getItem("listaContatos");

  if (listaContatos !== null) {
     listaContatos = JSON.parse(listaContatos)
  }

  let itensContato = listaContatos.map((item, index) => {
    item.index = index;
    return <ItemContato
      nome={item.nome}
      email={item.email}
      tel={item.tel}
      index={index}
      onEdit={() => handleOpen(item)} />
  })

  return (
    <>
    <Modal open={open} onClose={handleClose}>  
      <Box className="modal">
          <ModalForm titulo="Editar contato" onClose={handleClose} editar={editar} />
      </Box>
    </Modal>
    <table className="contato">
      <tr>
        <th>Contato</th>
        <th>Email</th>
        <th>Telefone</th>
        <th>Editar</th>
      </tr>
      {itensContato}
    </table>
    </>
  )
}

export default Contatos
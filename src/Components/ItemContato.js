import React from 'react'
import edit from "../Assets/ic-edit.svg"
import delet from "../Assets/ic-delete.svg"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ModalExcluir from './ModalExcluir';

const ItemContato = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleExcluir = (e) => {
        e.preventDefault();
        console.log(e)
        let listaContatos = JSON.parse(localStorage.getItem("listaContatos"));
        listaContatos.splice(props.index, 1)
        localStorage.setItem("listaContatos", JSON.stringify(listaContatos))
    }

  return (
    <tr className="itemContato" index={props.index}>
        <td className='nome'>{props.nome}</td>
        <td>{props.email}</td>
        <td>{props.tel}</td>
          
        <td className="edit">
        <button onClick={props.onEdit} value={props.index}><img src={edit} /></button>
              <button onClick={handleOpen}><img src={delet} /></button>
              <Modal open={open} onClose={handleClose}>  
                <Box className="modal">
                      <ModalExcluir onClose={handleClose} />
                </Box>
            </Modal>
        </td>
        
      </tr> 
  )
}

export default ItemContato
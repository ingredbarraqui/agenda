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
    const calcCor = (letra) => {
      var hue = Math.floor((letra.toLowerCase().charCodeAt()-96)/26*360);
      return "hsl(" + hue + ", 100%, 70%)";
    };

    return (
      <tr className={props.destaque ? 'itemContato destaque' : 'itemContato'} index={props.index}>
        <td className="nome">
          <span className="icone" style={{ backgroundColor: calcCor(props.nome[0]) }}>{props.nome[0]}</span> {props.nome}</td>
          <td>{props.email}</td>
          <td>{props.tel}</td>
          <td className="edit">
            <button onClick={props.onEdit} value={props.index}><img src={edit} /></button>
            <button onClick={handleOpen}><img src={delet} /></button>
            <Modal open={open} onClose={handleClose}>
              <Box className="modal">
                  <ModalExcluir onClose={handleClose} changeLista={props.changeLista} index={props.index} />
              </Box>
            </Modal>
          </td>
        </tr>
    )
}

export default ItemContato

import React from 'react'
import styles from "./Header.css"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { ReactComponent as Logo } from "../Assets/ic-logo.svg"
import ModalForm from './ModalForm';

export default function Header() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
      <header>
          <div className="header">
            <div><Logo aria-label='Logo Ubook' /></div>
            <div><Button onClick={handleOpen}><i className="fa-solid fa-plus"></i>Criar contato</Button></div>
            <Modal
                open={open}
                onClose={handleClose}>  
                <Box className="modal">
                    <ModalForm titulo="Criar novo contato" onClose={handleClose}/>
                </Box>
            </Modal>
            <div className="search">
                <input type="text" placeholder='Buscar...' />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>      
      </header>
  )
}
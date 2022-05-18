import React from 'react'
import styles from "./Header.css"
import { ReactComponent as Logo } from "../Assets/ic-logo.svg"

const Header = () => {
  return (
      <header>
          <div class="header">
            <div><Logo aria-label='Logo Ubook' /></div>
            <div>
                <button><i class="fa-solid fa-plus"></i>Criar contato</button>
            </div>
            <div class="search">
                <input type="text" placeholder='Buscar...' />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>      
      </header>
  )
}

export default Header
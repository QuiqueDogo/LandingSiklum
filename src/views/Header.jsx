import React from 'react'
import logo from '../img/Logos.svg'

export default function Header() {
  return (
    <header className='headerBox'>
        <div className='container'>
            <div class="d-flex flex-row align-items-center">
                <img src={logo} id="logoSiklum" alt="logoSiklum" />
                <a class="linkHeader" href='#'>Partner</a>
                <a class="linkHeader" href='#'>Precios</a>
                <button id="btnSiklum">Ingresar</button>
            </div>
        </div>
    </header>
  )
}

import React from 'react'
import logo from '../img/Logos.svg'

export default function Header() {
  return (
    <header className='headerBox'>
        <div className='container'>
            <div className="d-flex flex-row align-items-center">
                <img src={logo} id="logoSiklum" alt="logoSiklum" />
                <a className="linkHeader" href='#'>Partner</a>
                <a className="linkHeader" href='#'>Precios</a>
                <button id="btnSiklum">Ingresar</button>
            </div>
        </div>
    </header>
  )
}

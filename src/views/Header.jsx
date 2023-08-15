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
                <div style={{columnGap:'10px', marginLeft:"auto"}} className='d-flex flex-row'>
                  <a target='_blank' href='http://ec2-54-215-122-148.us-west-1.compute.amazonaws.com:8079/Views/Seguridad/Login' id="btnSiklum">Ingresar</a>
                  <a target='_blank' href='http://ec2-54-215-122-148.us-west-1.compute.amazonaws.com:8079/Views/Catalogos/RegistroCuenta' id="btnSiklum">Registrarse</a>
                </div>
            </div>
        </div>
    </header>
  )
}

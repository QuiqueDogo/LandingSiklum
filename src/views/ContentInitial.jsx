import React from 'react';
import demoplay from '../img/demoplay.svg';
import mockup from '../img/mockup.png'
import marcas from '../img/logos.png'
import logo1 from '../img/first.png'
import logo2 from '../img/second.png'
import logo3 from '../img/thrid.png'
import logo4 from '../img/four.png'

function ContentInitial({settipoModal}) {
  return (
    <>
    <section className='container py-4'>
        <div className='contentPrincipal'>
            <div className='contentText'>
                <h1>Tu plataforma <span className='numberTitle'> 360 </span> para cumplimiento fiscal en México</h1>
                <p className='subtitle'>Expediente de Clientes, Expediente de Proveedores, Consola REPSE, Complementos de Pago, Buzón Tributario y Bóveda Fiscal.</p>
                <div className="btnDouble">
                    <button onClick={()=> settipoModal("prueba")} className='demoBtn'  data-bs-toggle="modal" data-bs-target="#exampleModal">Prueba Gratis</button>
                    {/* <a target='_blank' className='demoBtn' href='http://ec2-54-215-122-148.us-west-1.compute.amazonaws.com:8079/Views/Catalogos/RegistroCuenta'>Prueba Gratis</a> */}
                </div>
            </div>
            <div className='contentImg'>
                <img src={mockup} style={{width:'100%'}} className="mockup" alt="mockupSiklum" />
            </div>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <p className='partners'>Con la confianza de más de 100 usuarios de más de 50 empresas nacionales y multinacionales</p>
            <img alt="logos" style={{width:'100%'}} src={marcas}/>
        </div>
    </section>
    <section className="contentCards">
        <div className="container">
            <h2>La plataforma más completa y confiable </h2>
            <p className="subtitlePlataform">para la gestión y administración de documentos fiscales.</p>
            <div className='cards'>
                <div className="card">
                    <img src={logo1} alt="logo1" />
                    <p>+200</p>
                    <span>Expedientes</span>
                </div>
                <div className="card">
                    <img src={logo2} alt="logo2" />
                    <p>+100</p>
                    <span>Proveedores REPSE</span>
                </div>
                <div className="card">
                    <img src={logo3} alt="logo3" />
                    <p>+350</p>
                    <span>Descargas de XML</span>
                </div>
                <div className="card">
                    <img src={logo4} alt="logo4" />
                    <p>+85</p>
                    <span>Complementos de pago conciliados</span>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ContentInitial
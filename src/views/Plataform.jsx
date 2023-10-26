import React from 'react'
import logo1 from '../img/expediente_1.svg'
import logo2 from '../img/expediente_2.svg'
import logo3 from '../img/expediente_3.svg'
import logo4 from '../img/expediente_4.svg'
import checkboxBlanco from '../img/checkwhite.svg'
import checkboxAzul from '../img/checkblue.svg'
import infowhite from '../img/infowhite.svg'
import blue from '../img/blue.svg'
import proveedores from '../img/expediente.svg';
import consola from '../img/consola.svg';
import pago from '../img/pago.svg';
import expediente from '../img/clientes.svg';
import buzon from '../img/buzon.svg';
import mensaje from '../img/mensaje.svg';
import demo from '../img/vector.png'

function Plataform({tipoModal ,settipoModal}) {
    
    const handleForm = async(event) =>{
        event.preventDefault();
        /*
        let body ={
                "empresa": "Empresa Chida",
                "nombre": "Luis Enrique",
                "apPaterno": "Garcia",
                "apMaterno": "Vega",
                "puesto": "",
                "telefono": "4434032858",
                "correo": "enrique.lgv93@gmail.com",
                "clave": ""
        }
        */

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Origin", "http://localhost:3000");

        var raw = JSON.stringify({
            "empresa": "PATITO",
            "nombre": "Alejandra",
            "apPaterno": "Sauceda",
            "apMaterno": "García",
            "correo": "laguladonuts@gmail.com",
            "clave": "",
            "telefono": "6671574758",
            "puesto": ""
        });
        
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
          };
          
          fetch("https://cors-anywhere.herokuapp.com/http://ec2-54-215-122-148.us-west-1.compute.amazonaws.com:8080/api/catalogos/CrearCuenta?esPrueba=true", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        }
    return (
        <>
            <section className='container'>
                <div className='contentPlaform d-flex flex-column '>
                    <div className='titlePlataform'>
                        <h3 className='titlePlat'>Conoce nuestra plataforma <span className='number'>360</span></h3>
                        <p className='texPlat mt-4'>SIKLUM es una herramienta digital integral con la que podrás tener control de <br />
                            los principales procesos de vigilancia fiscal.</p>
                    </div>
                    <div className='cardPlataform'>
                        <div className='infograPlataform'>
                            <div className='infoCard'>
                                <img src={logo1} alt="info1" />
                                <p><strong>Tu expediente fiscal al día:</strong> herramienta digital integral con la que podrás tener control.</p>
                            </div>
                            <div className='infoCard'>
                                <img src={logo2} alt="info2" />
                                <p><strong>Tu expediente fiscal al día:</strong> herramienta digital integral con la que podrás tener control.</p>
                            </div>
                            <div className='infoCard'>
                                <img src={logo3} alt="info3" />
                                <p><strong>Tu expediente fiscal al día:</strong> herramienta digital integral con la que podrás tener control.</p>
                            </div>
                            <div className='infoCard'>
                                <img src={logo4} alt="info4" />
                                <p><strong>Tu expediente fiscal al día:</strong> herramienta digital integral con la que podrás tener control.</p>
                            </div>
                        </div>
                        <div className='videoPlataform'>
                            <div className='contentVideo'>
                            <iframe style={{width:"100%", height:"100%"}} height="315" src="https://www.youtube.com/embed/kVxTrhojpFI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contentMembresias'>
                    <div className='titlePlataform'>
                        <h4 className='titlePlat'>Membresías anuales SIKLUM</h4>
                        <p className='textMembresia mt-4'>Aquí encontrarás toda la información de nuestras membresías y funciones adicionales, podrás registrarte para soliciar tu prueba gratuita por
                            30 días o si lo prefieres puedes realizar la contratación directa (sin días de prueba gratuitos)  para obtener un 10% de descuento.</p>
                    </div>
                    <div className='cardsMembresias'>
                        <div>
                            <div className='cardMembresias'>
                                <p className='titleCard'>Membresía</p>
                                <p className='typeMemb'>MICRO</p>
                                <p className='money'>$1799<span>.00 MXN</span></p>
                                <p className='pagoBlue'>Pago Anual</p>
                                <div className='my-2 px-4 subContCard d-flex flex-row align-items-center'>
                                    <img src={checkboxBlanco} alt="checkbox" />
                                    <p>1 constancia de situación fiscal por cuenta</p>
                                </div>
                                <div className='my-2 px-4 subContCard d-flex flex-row align-items-center'>
                                    <img src={checkboxBlanco} alt="checkbox" />
                                    <p> 2 usuarios por cuenta </p>
                                </div>
                                <div className='my-2 px-4 subContCard d-flex flex-row align-items-center'>
                                    <img src={checkboxBlanco} alt="checkbox" />
                                    <p>30 Proveedores PPD</p>
                                </div>
                                <p className='moreInfo'>
                                    <img className='mx-1' src={infowhite} alt='masInfo' />
                                    Más información</p>
                            </div>
                            <p className='trial'>Gratis por 30 días</p>
                        </div>

                        <div>
                            <div className='cardMembresias popular'>
                                <p className='titleCard'>Membresía</p>
                                <p className='typeMemb'>PYME</p>
                                <p className='money'>$2899<span style={{ color: "#fff" }}>.00 MXN</span></p>
                                <p className='pagoBlue'>Pago Anual</p>
                                <div className='my-2 px-4 subContCard d-flex flex-row align-items-center'>
                                    <img src={checkboxAzul} alt="checkbox" />
                                    <p>2 constancia de situación fiscal por cuenta</p>
                                </div>
                                <div className='my-2 px-4 subContCard d-flex flex-row align-items-center'>
                                    <img src={checkboxAzul} alt="checkbox" />
                                    <p>4 usuarios por cuenta </p>
                                </div>
                                <div className='my-2 px-4 subContCard d-flex flex-row align-items-center'>
                                    <img src={checkboxAzul} alt="checkbox" />
                                    <p>60 Proveedores PPD</p>
                                </div>
                                <p className='sign'>POPULAR</p>
                                <p className='moreInfo'>
                                    <img className='mx-1' src={blue} alt='masInfo' />
                                    Más información</p>
                            </div>
                            <p className='trial'>Gratis por 30 días</p>
                        </div>

                        <div>
                            <div className='cardMembresias '>
                                <p className='titleCard'>Membresía</p>
                                <p className='typeMemb'>GRANDE</p>
                                <p className='money'>$5999<span>.00 MXN</span></p>
                                <p className='pagoBlue'>Pago Anual</p>
                                <div className='my-2 px-4 subContCard d-flex flex-row align-items-center'>
                                    <img src={checkboxBlanco} alt="checkbox" />
                                    <p>4 constancia de situación fiscal por cuenta</p>
                                </div>
                                <div className='my-2 px-4 subContCard d-flex flex-row align-items-center'>
                                    <img src={checkboxBlanco} alt="checkbox" />
                                    <p>8 usuarios por cuenta </p>
                                </div>
                                <div className='my-2 px-4 subContCard d-flex flex-row align-items-center'>
                                    <img src={checkboxBlanco} alt="checkbox" />
                                    <p>120 Proveedores PPD</p>
                                </div>
                                <p className='moreInfo'>
                                    <img className='mx-1' src={infowhite} alt='masInfo' />
                                    Más información</p>
                            </div>
                            <p className='trial'>Gratis por 30 días</p>
                        </div>

                        <div>
                            <div className='cardMembresias ' style={{ backgroundColor: "#EDF3FF" }}>
                                <p className='titleCard'>Consola</p>
                                <p className='typeMemb'>CONTADOR</p>
                                <p className='money'>$2899<span>.00 MXN</span></p>
                                <p className='pagoBlue'>Pago Anual</p>
                                <div className='my-2 px-4 subContCard d-flex flex-row align-items-center'>
                                    <img src={checkboxBlanco} alt="checkbox" />
                                    <p>Gana comisiones al referir nuevos clientes</p>
                                </div>
                                <div className='my-2 px-4 subContCard d-flex flex-row align-items-center'>
                                    <img src={checkboxBlanco} alt="checkbox" />
                                    <p>Facilita tu práctica de cumplimiento fiscal</p>
                                </div>
                                <div className='my-2 px-4 subContCard d-flex flex-row align-items-center'>
                                    <img src={checkboxBlanco} alt="checkbox" />
                                    <p>Ahorra tiempo y dinero</p>
                                </div>
                                <p className='moreInfo'>
                                    <img className='mx-1' src={infowhite} alt='masInfo' />
                                    Más información</p>
                            </div>
                        </div>
                    </div>
                    <div className='twoBtns m-auto'>
                        <button onClick={() =>settipoModal("prueba")} className='solicitar' style={{ backgroundColor: "#fff" }}  data-bs-toggle="modal" data-bs-target="#exampleModal">Solicitar prueba gratuita</button>
                        <button onClick={() =>settipoModal("contratacion")} className='contratacion'  data-bs-toggle="modal" data-bs-target="#exampleModal">Contratación directa
                            <span className='descuento'>
                                <span className='descuentoText'>Descuento</span>
                                <span className='descuentoNumber'>-10%</span>
                            </span>
                        </button>
                    </div>
                </div>
                <div className='funcionesAdicionales'>
                    <div className='titlePlataform py-5'>
                        <h5 className='titlePlat'>Funciones adicionales</h5>
                        <p className='textMembresia mt-1'>Complementa con estas funciones para aprovechar al máximo tu plataforma</p>
                    </div>
                    <div className='contentAdicionales'>
                        <div className='cardAdicionales'>
                            <img src={proveedores} alt="proveedores" />
                            <div>
                                <p className='titleAdicionales'>Expedientes de Proveedores</p>
                                <p className='nonAdicionales'>-</p>
                                <p className='subtitleAdicionales'>Proveedor paga $149.00 MXN por expediente</p>
                            </div>
                        </div>
                        <div className='cardAdicionales'>
                            <img src={consola} alt="proveedores" />
                            <div>
                                <p className='titleAdicionales'>Consola REPSE</p>
                                <p className='money'>$149<span>.00 MXN</span></p>
                                <p className='subtitleAdicionales'>Pago mensual por trabajador</p>
                            </div>
                        </div>
                        <div className='cardAdicionales'>
                            <img src={pago} alt="proveedores" />
                            <div>
                                <p className='titleAdicionales'>Complemento de pago</p>
                                <p className='money'>$149<span>.00 MXN</span></p>
                                <p className='subtitleAdicionales'>Pago mensual por proveedor</p>
                            </div>
                        </div>
                        <div className='cardAdicionales'>
                            <img src={expediente} alt="proveedores" />
                            <div>
                                <p className='titleAdicionales'>Expedientes de Clientes</p>
                                <p className='money'>$149<span>.00 MXN</span></p>
                                <p className='subtitleAdicionales'>Pago mensual por expediente</p>
                            </div>
                        </div>
                        <div className='cardAdicionales'>
                            <img src={buzon} alt="proveedores" />
                            <div>
                                <p className='titleAdicionales'>Expedientes de Proveedores</p>
                                <p className='money'>Incluido</p>
                                <p className='subtitleAdicionales'>en cualquier membresía</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='contentMedida'>
                <div className='container'>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <h6>¿Quieres un plan a tu medida?</h6>
                        <button className='mensaje'>
                            Escribenos
                            <img src={mensaje} alt="mensaje" />
                        </button>
                    </div>
                </div>
            </div>
            <section className='preguntas'>
                <div className='container'>
                    <div className="contentPreguntas">
                        <p className='titlePreguntas'>Preguntas Frecuentes</p>
                        <div className="accordion d-flex flex-column justify-content-center align-items-center" id="accordionExample">
                            <div className="accordion-item boxPregunta">
                                <h2 className="accordion-header">
                                    <button className="accordion-button btncolorPregunta" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        ¿Qué métodos de pago aceptan?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>siklum es una herramienta digital integral con la que podrás tener control de los principales procesos de vigilancia fiscal.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item boxPregunta">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed btncolorPregunta" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        ¿Puedo solicitar un reembolso?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item boxPregunta">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed btncolorPregunta" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        ¿Es posible transferir mi membresía anual?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item boxPregunta">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed btncolorPregunta" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <strong> ¿Puedo solicitar una prueba gratuita?</strong>
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="demoGratuita ">
                <p className='demotitle'>¿Eres contador? Solicita tu Prueba gratuita</p>
                <button className='demoBtn my-3'  data-bs-toggle="modal" data-bs-target="#exampleModal">Solicitar</button>
                <img style={{ height: "100%", marginTop: "auto" }} src={demo} alt="demoe" />
            </section>
            <footer className="footerBkg">
                <div className='container'>
                    <div className='contentFooter d-flex flex-row'>
                        <div>
                            <p>Nosotros</p>
                            <p>¿Quiénes somos?</p>
                            <p>Productos</p>
                            <p>Contáctanos</p>
                        </div>
                        <div>
                            <p>FAQs</p>
                            <p>Términos y condiciones</p>
                            <p>Política de privacidad</p>
                        </div>
                        <div className='cardNews'>

                        </div>
                    </div>
                </div>
            </footer>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                           
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body px-5">
                            <p className='titleModal'>{tipoModal === "contratacion" ? "Únete a siklum": "Prueba gratuita siklum por 30 días"}</p>
                            <p className='subtitleModal'>Compártenos tus datos para enviarte la información necesaria y puedas comenzar a utilizar todas las funciones de la plataforma</p>
                            <p className='conditionalModal'>*No aplica para consola contador. Visita nuestra sección de <span className='planesModal'> planes</span></p>
                            <div className='row'>
                                <div className="col-md-6 d-flex flex-column px-4 py-2">
                                    <label className='labelModal' htmlFor="nombre">Nombre Empresa</label>
                                    <input type="text" name='nombre' className='inputModal' />
                                </div>
                                <div className="col-md-6 d-flex flex-column px-4 py-2">
                                    <label  className='labelModal' htmlFor="nombre">Escribe tu nombre</label>
                                    <input type="text" name='nombre' className='inputModal' />
                                </div>
                                <div className="col-md-6 d-flex flex-column px-4 py-2">
                                    <label  className='labelModal' htmlFor="nombre">Apellido</label>
                                    <input type="text" className='inputModal' />
                                </div>
                                <div className="col-md-6 d-flex flex-column px-4 py-2">
                                    <label  className='labelModal' htmlFor="nombre">Email</label>
                                    <input type="text" className='inputModal' />
                                </div>
                                <div className="col-md-6 d-flex flex-column px-4 py-2">
                                    <label  className='labelModal' htmlFor="nombre">Telefono</label>
                                    <input type="text" className='inputModal' />
                                </div>
                               
                            </div>
                        </div>
                        <div className="modal-footer justify-content-center flex-column ">
                            <div className="d-flex flex-row align-items-center my-4">
                                <input type="checkbox" name="" id="" className='mx-2 '/>
                                <label htmlFor="">Acepto Términos y Condiciones</label>
                            </div>
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            <button type="button" className="btn btn-primary btnCrear" onClick={handleForm}>Crear Cuenta</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plataform
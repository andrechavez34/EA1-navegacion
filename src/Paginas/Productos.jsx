import Tarjeta from "../Componentes/Tarjeta";
import { useState } from "react";
import Modal from "../Componentes/Modal";
import Boton from "../componentes/Boton";

function Productos() {
    const[mostrar, setMostrar] = useState(false)
    
        function cerrarModal(){
            setMostrar(false)
        }
    
        function mostrarModal(){
            setMostrar(true)
        }
    return(
        <main>
            <h1>Productos</h1>
            <Tarjeta
                imagen="/Img/hamburguesa"
                titulo="Hamburguesa"
                descripcion= "Incluye papas y refresco"
            >
                <Boton funcion ={mostrarModal}>Aceptar</Boton>
            </Tarjeta>

            {mostrar && (
                <Modal>
                    <h2>Listo</h2>
                    <p>Tu mensaje fue enviado</p>
                    <Boton funcion={cerrarModal}>Aceptar</Boton>
                </Modal>
            )}
            
            

        </main>
    )
}

export default Productos;
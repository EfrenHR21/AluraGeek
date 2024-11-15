import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")

export default function crearCard(nombre,precio,imagen){
    const producto = document.createElement("li");

    producto.className="producto__item";
    producto.innerHTML=`<img "
                    src="${imagen}"></img>
                <div class="descripcion-producto">
                    <h3>${nombre}</h3>
                    <p>S/.${precio}</p>
                </div>`;

                return producto;
}

async function listarProductos(){
    try {
        const listaAPI = await conexionAPI.listarProductos()

        listaAPI.forEach(producto => lista.appendChild(crearCard(producto.nombre,producto.precio,producto.imagen)))
    
    } catch (e) {
        lista.innerHTML=`<h2 class="mensaje__titulo"> Ha ocurrido un problema con la conexion </h2>`;
    }
}

listarProductos()
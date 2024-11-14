async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/productos");

    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

async function enviarProducto(nombre,precio,imagen) {
    const conexion = await fetch("http://localhost:3001/productos", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:`S/.${precio} `,
            imagen:imagen,
        })
    })
    const conexionConvertida = conexion.json();
    if(!conexion.ok){
        throw new Error("Ocurrio un error al enviar el video");
    }

    return conexionConvertida;
}

export const conexionAPI={
    listarProductos,enviarProducto
}
// Tienda de Consolas de Videojuegos

function Bienvenida(){
    alert("Bienvenido a GamerZone");
    nombre = prompt("Ingrese su nombre");
    alert("Bienvenido " + nombre);
}

function opciones(){
    let opcion = prompt("Seleccione una Opcion" + "\nVer Marcas = 1" + "\nComprar = 2")
    switch(opcion){
        case "1":
            productos();
        case "2":
            comprar();
        default:
            break;
    }
    total();
}

function productos(){
    let marcas = prompt("Seleccione una marca: " + "\nMicrosoft = 1" + "\nSony = 2" + "\nNintendo = 3")
    switch(marcas){
        case "1":
            const marca1 = consolas.filter((el) => el.marca.includes("Microsoft"));
            for (let consola of marca1){
                alert("\nNombre: " + consola.nombre + "\nPrecio: " + consola.precio + " USD" + "\nCapacidad: " + consola.capacidad + " GB" + "\nMarca: " + consola.marca)
            }
            break;
        case "2":
            const marca2 = consolas.filter((el) => el.marca.includes("Sony"));
            for (let consola of marca2){
                alert("\nNombre: " + consola.nombre + "\nPrecio: " + consola.precio + " USD" + "\nCapacidad: " + consola.capacidad + " GB" + "\nMarca: " + consola.marca)
            }
            break;
        case "3":
            const marca3 = consolas.filter((el) => el.marca.includes("Nintendo"));
            for (let consola of marca3){
                alert("\nNombre: " + consola.nombre + "\nPrecio: " + consola.precio + " USD" + "\nCapacidad: " + consola.capacidad + " GB" + "\nMarca: " + consola.marca)
            }
            break;
        default:
            
    }
    opciones();
}

function comprar(){
    for (let consola of consolas){
        let respuesta = prompt("Desea comprar la Consola:" + "\nNombre: " + consola.nombre + "\nPrecio: " + consola.precio + " USD" + "\nCapacidad: " + consola.capacidad + " GB" + "\nMarca: " + consola.marca + "\nIngrese: Si o NO ").toUpperCase();
        switch(respuesta) {
            case "SI":
                consolas_seleccionadas.push(consola);
                break;
            default:
                break;
        }
    }
}
function total(){
    for (let consola of consolas_seleccionadas){
        total_precio += consola.precio;
    }
    alert("El total a pagar es: $" + total_precio + " USD" + "\nGracias por su Compra " + nombre);
}

let nombre = "";
let total_precio = 0;

Bienvenida();
opciones();


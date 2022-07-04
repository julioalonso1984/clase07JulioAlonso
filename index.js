const fechaActual = new Date()
const milisegundosPorDia = 86400000

let dia = prompt("Si usted es mayor de edad puede comprar los productos. \n Ingrese su día de nacimiento")
let mes = prompt("Ingrese su mes de nacimiento")
let anio = prompt("Ingrese su año de nacimiento")

const cumpleanios = new Date(anio, mes-1, dia)
const diferenciaDias = ( fechaActual - cumpleanios ) / milisegundosPorDia
const diferenciaAnios = diferenciaDias / 365

alert(`Naciste hace ${Math.floor(diferenciaAnios)} años`)

let edad = Math.floor(diferenciaAnios)
console.log(edad)

if (edad >= 18) {

    let opcion = prompt("BIENVENIDOS \nLIQUIDACION TOTAL \n 1. Heladera: $90.000 \n 2. Lavarropas: $80.000 \n 3. Calefactor: $50.000 \n ° presione cualquier letra si desea comprar y luego aceptar ó; \n ° ingrese la palabra (salir) para no continuar con las compras \n Los precios no incluyen IVA")

    while (opcion !=="salir"){



        class Producto {
            constructor (id, nombre, precio){
                this.id = parseInt(id)
                this.nombre = nombre.toUpperCase()
                this.precio = parseFloat(precio)
            }
            
        }


        let heladera = prompt("Ingrese (SI ó NO) si desea comprar la Heladera y luego presione aceptar")
        let lavarropas = prompt("Ingrese (SI ó NO) si desea comprar el lavarropas y luego presione aceptar")
        let calefactor = prompt("Ingrese (SI ó NO) si desea comprar el calefactor y luego presione aceptar")

        if (heladera == "si" || heladera == "SI" || heladera == "Si"){
            idHeladera = 1
            productoHeladera = "heladera"
            precioHeladera = 90000
        } else { 
            idHeladera= 1
            productoHeladera = ""
            precioHeladera = 0
        }
        if (lavarropas == "si" || lavarropas == "SI" || lavarropas == "Si"){
            idLavarropas = 2
            productoLavarropas = "lavarropas"
            precioLavarropas = 80000
        } else {
            idLavarropas = 2
            productoLavarropas = ""
            precioLavarropas = 0
        }
        if (calefactor == "si" || calefactor == "SI" || calefactor == "Si"){
            idCalefactor = 3
            productoCalefactor = "calefactor"
            precioCalefactor = 70000
        } else {
            idCalefactor = 3
            productoCalefactor = ""
            precioCalefactor = 0
        }
        const idHeladera1 = idHeladera
        const heladera1 = productoHeladera
        const precioHeladera1 = precioHeladera
        const idLavarropas1 = idLavarropas
        const lavarropas1 = productoLavarropas
        const precioLavarropas1 = precioLavarropas
        const idCalefactor1 = idCalefactor
        const calefactor1 = productoCalefactor
        const precioCalefactor1 = precioCalefactor


        const productos =[]
        productos.push (new Producto(idHeladera1, heladera1,precioHeladera1))
        productos.push (new Producto(idLavarropas1, lavarropas1,precioLavarropas1))
        productos.push (new Producto (idCalefactor1, calefactor1, precioCalefactor1))

        for (const producto of productos)
        console.log(producto)

        const buscando = productos.filter((producto) => producto.precio > 0)
        console.log (buscando)



        const nombres = productos.map((producto) => producto.nombre)
        console.log("Nombre de los productos: " + nombres)
        
            const encontrarItem1 = (element) => element.id == 1
            const encontrarItem2 = (element) => element.id == 2
            const encontrarItem3 = (element) => element.id == 3

            console.log(productos.findIndex(encontrarItem1));
            console.log(productos.findIndex(encontrarItem2));
            console.log(productos.findIndex(encontrarItem3));

        const resultado0 = productos.find((producto) => producto.id ===1)
        const resultado1 = productos.find((producto) => producto.id === 2)
        const resultado2 = productos.find ((producto) => producto.id === 3)

        console.log(resultado0)
        console.log(resultado1)
        console.log(resultado2)



        //const primerProducto = productos.nombre.findIndex[0]
        //console.log(primerProducto)
        

    


        alert("Nombre de los productos: " + nombres)

        let productoEliminado = parseInt(prompt("desea eliminar algun producto de los soleccionado. \nPresione 1 si desea eliminar la heladera \nPresione 2 resultado si desea elminar el lavarropas \nPresione 3 si desea eliminar el calefactor"))
        if (productoEliminado === 1){
            productoAEliminar = 1
        }else if (productoEliminado === 2){
            productoAEliminar = 2
        }
        else if (productoEliminado === 3){
            productoAEliminar = 3
        }else{
            alert("genial sigamos")
            productoAEliminar = 4
        }

        //let isLargeNumber = (element) => element.id == parseInt(productoAEliminar)
        //console.log(productos.findIndex(isLargeNumber));

    /*  const resultado = productos.find((producto) => producto.id == parseFloat( productoAEliminar1))
        console.log (resultado) */

        productoAEliminar1 = productoAEliminar
        productos.splice(productoAEliminar1 - 1, 1)

        //alert("Nombre de los productos: " + producots.nombres)

        const listaproductofinal = productos.map((producto) => producto.nombre)
        console.log("Nombre de los productos: " + listaproductofinal)
        alert("Nombre de los productos: " + listaproductofinal)

        const productosConPrecioActualizado = productos.map((producto) => producto.precio*1.21)
        

        console.log(productosConPrecioActualizado.length)

        const suma = productos.map(item => item.precio).reduce((prev, curr) => prev + curr, 0);
        console.log("el precio total a pagar es de: " + suma * 1.21);
        alert("el precio total a pagar por todos los productos es de: " + suma * 1.21 + " con iva incluido")




        opcion = prompt ("pulse salir para terminar ó pulse cualquier letra para cambiar de comprar")
    }
}else{
    alert("no puedes comprar mercaderia")
}


//tiendita de samrtbands



const SmartBand = function (modelo, precio, stock) {
    this.modelo = modelo
    this.precio = precio
    this.stock = stock
}



let smartBand1 = new SmartBand("Samsung Galaxy Watch 4", 20000, 10)
let smartBand2 = new SmartBand("Xiaomi Mi Smart Band 7", 15000, 20)
let smartBand3 = new SmartBand("Amazfit Bip U Pro", 10000, 30)
let smartBand4 = new SmartBand("Huawei Watch GT 3", 18000, 25)
let smartBand5 = new SmartBand("Garmin Venu 2", 25000, 50)
let smartBand6 = new SmartBand("Fitbit Charge 5", 15000, 15)
let smartBand7 = new SmartBand("Amazfit GTS 3", 12000, 10)
let smartBand8 = new SmartBand("TicWatch Pro 3 Ultra GPS", 23000, 40)



let lista = [smartBand1, smartBand2, smartBand3, smartBand4, smartBand5, smartBand6, smartBand7, smartBand8]

if (localStorage.getItem("SmartBand")) {
    lista = JSON.parse(localStorage.getItem("SmartBand"))
} else {
    lista = lista
}

function filtrarProductos() {
    const body = document.querySelector("body")
    const input = document.getElementById("filtrarP").value
    const palabraClave = input.trim().toUpperCase()
    const resultado = lista.filter((producto) => producto.modelo.toUpperCase().includes(palabraClave))

    if (resultado.length > 0) {

        const container = document.createElement("div")
        container.classList.add("container")

        resultado.forEach((producto) => {
            const card = document.createElement("div")

            const nombre = document.createElement("h2")
            nombre.textContent = `modelo: ${producto.modelo}`
            card.appendChild(nombre)

            const precio = document.createElement("p")
            precio.textContent = `precio: ${producto.precio}`
            card.appendChild(precio)

            const stock = document.createElement("p")
            stock.textContent = `cantidad: ${producto.stock}`
            card.appendChild(stock)

            container.appendChild(card)
        })
        body.appendChild(container)

    } else {
        alert("no hay coincidencias")
    }
}





function agregarProducto() {

    const form = document.createElement("form")
    form.innerHTML = `
      <label for="nombre-input">Modelo:</label>
      <input id= "nombre-input" type="text" required>
      
      <label for="precio-input">Precio:</label>
      <input id= "precio-input" type="number" required>
    
      <label for="stock-input">Stock:</label>
      <input id= "stock-input" type="number" required>
    
      <button type="submit">Agregar</button>
      `
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombreInput = document.getElementById("nombre-input").value.trim()
        const precioInput = parseFloat(document.getElementById("precio-input").value)
        const stockInput = parseInt(document.getElementById("stock-input").value)

        if (isNaN(precioInput) || isNaN(stockInput) || nombreInput === "") {
            alert("por favor ingresa valores validos.")
            return
        }

        const producto = new SmartBand(nombreInput, precioInput, stockInput)

        if (lista.some((elemento) => elemento.nombre === producto.nombre)) {
            alert("el SmartBand ya existe")
            return
        }

        lista.push(SmartBand)

        localStorage.setItem("SmartBand", JSON.stringify(lista))
        alert(`se agrego el producto ${producto.nombre} a la lista`)




        const container = document.createElement("div")

        lista.forEach((producto) => {
            const card = document.createElement("div")

            const nombre = document.createElement("h2")
            nombre.textContent = `nombre: ${producto.nombre}`
            card.appendChild(nombre)

            const precio = document.createElement("p")
            precio.textContent = `precio: ${producto.precio}`
            card.appendChild(precio)

            const stock = document.createElement("p")
            stock.textContent = `cantidad: ${producto.stock}`
            card.appendChild(stock)
            container.appendChild(card)
        })

        const body = document.querySelector("body")
        body.appendChild(container)

        form.reset()

    })

    const body = document.querySelector("body")
    body.appendChild(form)

}







const filtrarBtn = document.getElementById("filtrar")
filtrarBtn.classList.add("button")
filtrarBtn.addEventListener("click", filtrarProductos)


const agregarBtn = document.getElementById("agregarProducto")
agregarBtn.addEventListener("click", agregarProducto)
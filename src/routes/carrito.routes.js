const { Router } = require("express");
const { getProductosCarrito, createProductoCarrito,getProductoCarritoById,deleteCarritoProducto, updateCarritoProducto  } = require("../controllers/carrito.controller")

const routerCarrito = Router();

// Obtener todos
routerCarrito.get("/", getProductosCarrito)

// Crear 
routerCarrito.post("/", createProductoCarrito)

// Obetener  por Id
routerCarrito.get("/:id", getProductoCarritoById)

// Eliminar 
routerCarrito.delete("/:id", deleteCarritoProducto)

// Actualizar 
routerCarrito.put("/:id", updateCarritoProducto)

module.exports = routerCarrito;
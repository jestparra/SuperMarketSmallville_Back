const { Router } = require("express");
const { getProductos, createProducto,getProductoById,deleteProducto, updateProducto  } = require("../controllers/productos.controller")

const routerProductos = Router();

// Obtener todos
routerProductos.get("/", getProductos)

// Crear 
routerProductos.post("/", createProducto)

// Obetener  por Id
routerProductos.get("/:id", getProductoById)

// Eliminar 
routerProductos.delete("/:id", deleteProducto)

// Actualizar 
routerProductos.put("/:id", updateProducto)

module.exports = routerProductos;
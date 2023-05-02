const { Router } = require("express");
const { get,create,getById,deleteI, update, getByUserPass  } = require("../controllers/usuario.controller")

const routerUsuario = Router();

// Obtener todos
routerUsuario.get("/", get)

// Crear 
routerUsuario.post("/", create)

// Obetener  por Id
routerUsuario.get("/:id", getById)

// Obetener  por usuario contraseña
routerUsuario.post("/login", getByUserPass)

// Eliminar 
routerUsuario.delete("/:id", deleteI)

// Actualizar 
routerUsuario.put("/:id", update)

module.exports = routerUsuario;
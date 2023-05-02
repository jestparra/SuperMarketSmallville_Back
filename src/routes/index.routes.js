const { Router } = require("express")
const routerProductos = require("./productos.routes")
const routerCarrito = require("./carrito.routes")
const routerUsuario = require("./usuario.routes")

const router = Router();

// Rutas
router.get("/", (req, res) => {
    res.send("Aplicacion Universidad")
})

// Aca van las rutas para las bases de datos
router.use("/api/productos", routerProductos)
router.use("/api/ProductosCarrito", routerCarrito)
router.use("/api/Usuario", routerUsuario)


module.exports = router;
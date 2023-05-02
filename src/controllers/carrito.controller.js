const ProductoCarrito = require("../models/ProductoCarrito.model")

// Obtener Productos
const getProductosCarrito = async (req, res) =>{
  try {
    const obtenerProductos = await ProductoCarrito.find();
    res.status(200).json(obtenerProductos)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Crear Producto
const createProductoCarrito = async (req,res)=>{

  // Lo que viene del Body campos de la tabla!
  const body =req.body

  if(!body.nombreProducto){
    return res.status(500).json({ message: "Falta el campo nombreProducto" })
  }

  if(!body.precio){
    return res.status(500).json({ message: "Falta el campo precio" })
  }

  if(!body.descripcion){
    return res.status(500).json({ message: "Falta el campo descripcion" })
  }

  try {
    const newProducto = new ProductoCarrito(body)
    const saveProducto = await newProducto.save()
    res.status(200).json({msg:"Creado con exito", saveProducto})
  } catch (error) {
    res.status(500).json({msg: error.message || `Algo salio mal mientras se creaba el producto`})
  }
}

// Obtener producto por Id
const getProductoCarritoById = async (req, res)=>{

  const {id} = req.params

  try {
    const findProductoById = await ProductoCarrito.findById(id)

    if(!findProductoById){
      return res.status(404).json({ msg: `El producto con id ${id} no pudo ser obtenido` })
    }

    res.status(200).json(findProductoById)

  } catch (error) {
    res.status(500).json({msg: error.message || `Algo salio mal obtenia el producto`})
  }
}

// Eliminar producto
const deleteCarritoProducto = async (req, res)=>{
  const {id} = req.params
  let findProductoDelete
  try {
    findProductoDelete = await ProductoCarrito.findByIdAndDelete(id)
    if(!findProductoDelete){
      return res.status(404).json({ msg: `El producto con id ${findProductoDelete} no pudo ser obtenido` })
    }
    res.status(200).json({mgs:`Producto: ${findProductoDelete.nombreProducto} borrado con exito`})
  } catch (error) {
    res.status(500).json({msg: error.message || `Algo salio mal mientras se creaba el producto`})
  }
}

// Actualizar Producto
const updateCarritoProducto = async (req, res)=>{
  const {id} = req.params
  let findProductoUpdate
  try {
    findProductoUpdate = await ProductoCarrito.findByIdAndUpdate(id, req.body, { new: true })
    if(!findProductoUpdate){
      return res.status(404).json({ msg: `El producto con id ${findProductoUpdate} no pudo ser obtenido` })
    }
    res.status(200).json({mgs:`Producto: ${findProductoUpdate.nombreProducto} actualizado con exito`})
  } catch (error) {
    
  }
}

module.exports ={ getProductosCarrito, createProductoCarrito,getProductoCarritoById,deleteCarritoProducto, updateCarritoProducto}

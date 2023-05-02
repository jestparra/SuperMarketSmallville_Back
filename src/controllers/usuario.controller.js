const model = require("../models/Usuario.model")

// Obtener 
const get = async (req, res) =>{
  try {
    const obtener = await model.find();
    res.status(200).json(obtener)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Crear
const create = async (req,res)=>{

  // Lo que viene del Body campos de la tabla!
  const body =req.body

  if(!body.nombre){
    return res.status(500).json({ message: "Falta el campo nombre" })
  }

  if(!body.contrasena){
    return res.status(500).json({ message: "Falta el campo contrasena" })
  }

  if(!body.cedula){
    return res.status(500).json({ message: "Falta el campo cedula" })
  }

  try {
    const nuevo = new model(body)
    const save = await nuevo.save()
    res.status(200).json({msg:"Creado con exito", save})
  } catch (error) {
    res.status(500).json({msg: error.message || `Algo salio mal mientras se creaba el usuario`})
  }
}

// Obtener  por Id
const getById = async (req, res)=>{

  const {id} = req.params

  try {
    const findById = await model.findById(id)

    if(!findById){
      return res.status(404).json({ msg: `El item con id ${id} no pudo ser obtenido` })
    }

    res.status(200).json(findById)

  } catch (error) {
    res.status(500).json({msg: error.message || `Algo salio mal obteniendo el item`})
  }
}

// Verificar si el usuario existe
const getByUserPass = async (req, res)=>{

  const body =req.body
  try {
      data = {
        contrasena: body.contrasena,
        correo: body.correo
      };

    const resp = await model.findOne(data);
    if(!resp){
      return res.status(200).json({ msg: `Error credenciales` })
    }
    
    res.status(200).json(resp)
  } catch (error) {
    res.status(500).json({msg: error.message || `Algo salio mal obteniendo el item`})
  }
}

// Eliminar 
const deleteI = async (req, res)=>{
  const {id} = req.params
  let findDelete
  try {
    findDelete = await model.findByIdAndDelete(id)
    if(!findDelete){
      return res.status(404).json({ msg: `El item con id ${findDelete} no pudo ser obtenido` })
    }
    res.status(200).json({mgs:`item: ${findDelete.nombre} borrado con exito`})
  } catch (error) {
    res.status(500).json({msg: error.message || `Algo salio mal mientras se creaba el item`})
  }
}

// Actualizar 
const update = async (req, res)=>{
  const {id} = req.params
  let findUpdate
  try {
    findUpdate = await Usuario.findByIdAndUpdate(id, req.body, { new: true })
    if(!findUpdate){
      return res.status(404).json({ msg: `El item con id ${findUpdate} no pudo ser obtenido` })
    }
    res.status(200).json({mgs:`item: ${findUpdate.nombre} actualizado con exito`})
  } catch (error) {
    
  }
}

module.exports ={ get, create,getById,deleteI, update, getByUserPass}

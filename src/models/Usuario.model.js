const { Schema, model } = require("mongoose");

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    contrasena: {
        type: String,
        require: true,
        trim: true
    },
    cedula:{
      type:String,
      require:true,
      trim:true
    },
    correo: {
        type: String,
        require: true,
        trim: true
    }
}, {
    versionKey: false,
    timestamps: true,
})


const usuario = model("Usuario", usuarioSchema);

module.exports = usuario;
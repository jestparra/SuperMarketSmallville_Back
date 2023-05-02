const { Schema, model } = require("mongoose");

const productoSchema = new Schema({
    nombreProducto: {
        type: String,
        require: true,
        trim: true
    },
    precio: {
        type: Number,
        require: true,
        validate: {
            validator: function (value) {
                return value > 0;
            },
            message: "El valor debe ser mayor que cero"
        }
    },
    descripcion:{
      type:String,
      require:true,
      trim:true
    },
    descuento: {
      type: Number,
      validate: {
          validator: function (value) {
              return !isNaN(parseFloat(value)) && isFinite(value);
          },
          message: "El valor debe ser un número"
      }
    },
    unidades: {
        type: Number,
        validate: {
            validator: function (value) {
                return !isNaN(parseFloat(value)) && isFinite(value);
            },
            message: "El valor debe ser un número"
        }
    },
    imagenes:{
      type:String
    }
}, {
    versionKey: false,
    timestamps: true,
})


const Producto = model("Producto", productoSchema);

module.exports = Producto;
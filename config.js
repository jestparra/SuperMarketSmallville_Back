const { config } = require("dotenv");

// Carga las variables de entorno definidas en el archivo .env
config();

// Exporta la cadena de conexión a la base de datos MongoDB
module.exports = {
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost/tienda-virtual-universidad'
}


const mongoose = require("mongoose");
const config = require("./config");
const server = require("./src/app");

const PORT = server.get('port');

(async () => {
    try {
        const db = await mongoose.connect(config.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Base de datos está conectada a:", db.connection.name);
        server.listen(PORT, () => {
            console.log('Servidor escuchando en el puerto', PORT);
        });
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
        process.exit(1);
    }
})();

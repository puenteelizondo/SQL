const sql = require("mssql");

// Configuración de conexión
const config = {
    user: "sa",
    password: "Triggerdb!!!!",
    server: "127.0.0.1", // Cambia esto si es otro servidor
    database: "holamundo",
    options: {
        encrypt: false, // Cambia a true si usas Azure
        enableArithAbort: true,
    },
};

// Función para conectar y ejecutar consultas
async function connectDB() {
    try {
        let pool = await sql.connect(config);
        console.log("✅ Conectado a SQL Server");
        return pool;
    } catch (error) {
        console.error("❌ Error de conexión:", error);
    }
}

// Exportamos la conexión
module.exports = { connectDB, sql };


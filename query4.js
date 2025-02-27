const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {
                                            // tambien puedo traer los diferentes registros de diferentes columnas
        let result = await pool.request().query("SELECT DISTINCT contacto,correo FROM procurador");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
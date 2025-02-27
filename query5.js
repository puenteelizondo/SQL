const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {
                                            //trae el numero de datos diferentes de la columna que
                                            //se especifica
        let result = await pool.request().query("SELECT COUNT(DISTINCT correo) FROM procurador");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
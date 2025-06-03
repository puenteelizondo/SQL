const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {

                                                //eliminar columna a tabla                 
        let result = await pool.request().query("ALTER TABLE persons DROP COLUMN jejelol;");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
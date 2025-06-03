const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {

                                                //modificar nombre de columna                 
        let result = await pool.request().query("EXEC sp_rename 'persons.City',  'ciudad', 'COLUMN';");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {

                                                //borrar una tabla                  
        let result = await pool.request().query("DROP TABLE persons;");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
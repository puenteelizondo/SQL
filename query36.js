const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {

                                                //agregar columna a tabla                 
        let result = await pool.request().query("ALTER TABLE persons ADD jejelol varchar(255);");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
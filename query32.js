const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {

                                                //crear una BD                      
        let result = await pool.request().query("CREATE DATABASE holamundo");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
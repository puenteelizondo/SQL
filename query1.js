const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {
        let result = await pool.request().query("SELECT * FROM procurador");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();

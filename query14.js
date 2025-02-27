const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {

                                                //traer toda la informacion de la tabla de procurador ordenados
                                                //alfabeticamente por el contacto 
        let result = await pool.request().query("SELECT * FROM procurador ORDER BY contacto");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {

                                                //lo que hace es ordenar por contacto pero si hay 2 repetidos que los ordene
                                                //por fecha de mensaje 
        let result = await pool.request().query("SELECT * FROM procurador ORDER BY contacto, f_mensaje;");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {

                                                //lo que hace es ordenar de forma acendente los contactos
                                                // y si encuentra 2 repetidos que pase a la fecha y los ordene de forma descente
        let result = await pool.request().query("SELECT * FROM procurador ORDER BY 'contacto' ASC, f_mensaje DESC;");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
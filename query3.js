const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {
                                                //lo que se hace con este comando es traes todos los datos diferentes 
                                                //de una columna por ejemplo que si se registraron 3 juan por error
                                                //solo se traiga 1 
        let result = await pool.request().query("SELECT DISTINCT contacto FROM procurador");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();

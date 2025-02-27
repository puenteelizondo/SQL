const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {

                                                //trae todos los datos que en el contacto no lleven un luis fernandez
                                                // esa es a funcion del NOT
        let result = await pool.request().query("SELECT * FROM procurador WHERE NOT contacto = 'Luis Fernández'");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
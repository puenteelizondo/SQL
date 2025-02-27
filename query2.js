const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {
                                                //de esta forma solo traemos las columnas que especificamos
                                                //de la tabla procurador
        let result = await pool.request().query("SELECT contacto,correo FROM procurador");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();

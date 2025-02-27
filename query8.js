const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {

                                                //te traes los campos especificados en la tabla de procurador  el id 3                                         
        let result = await pool.request().query("SELECT contacto,correo FROM procurador WHERE id_mensaje=3");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {

                                                //Lo contrario de left joint
                                                                                      
        let result = await pool.request().query("SELECT us.correo, infus.oficina, infus.piso FROM usuarios us RIGHT JOIN info_usuario infus ON us.id_usuario=infus.id_usuario;");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
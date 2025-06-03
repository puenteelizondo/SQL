const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {

                                                //te trae todo lo de las tablas                             
        let result = await pool.request().query("SELECT us.correo, infus.oficina, infus.piso FROM usuarios us FULL OUTER JOIN info_usuario infus ON us.id_usuario=infus.id_usuario ORDER BY us.id_usuario;");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
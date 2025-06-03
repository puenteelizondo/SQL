const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {

                                                //no importa que los campos no esten completos de todos modos los trae
                                                                                      
        let result = await pool.request().query("SELECT us.correo, infus.oficina FROM usuarios us LEFT JOIN info_usuario infus ON us.id_usuario=infus.id_usuario;");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
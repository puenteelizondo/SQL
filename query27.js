const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {

                                                //se trae el resgistro que este en ambas tablas los que no esten completos no los trae
                                                                                      
        let result = await pool.request().query("SELECT us.nombre_usuario, infus.oficina FROM usuarios us INNER JOIN info_usuario infus ON us.id_usuario=infus.id_usuario;");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {
                                            //lo que hace es traer de la tabla procrador con la 
                                            //condicion where traer el id 1 con toda su informacion 
                                        
        let result = await pool.request().query("SELECT * FROM procurador WHERE id_mensaje=1;");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
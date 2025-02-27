const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {

                                                //traer de la tabla de procurador ordanados por fecha de mensaje 
                                                //de menor a mayor 
                                                                                      
        let result = await pool.request().query("SELECT * FROM procurador ORDER BY f_mensaje");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {

                                                //que solo traiga la info de los que son mayores de 50 en el id 
                                                                                      
        let result = await pool.request().query("SELECT * FROM procurador WHERE NOT id_mensaje < 50;");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
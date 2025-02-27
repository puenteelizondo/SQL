const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {

                                                //que solo traiga la info de los que no son luis fernandez ni jesus
                                                                                      
        let result = await pool.request().query("SELECT * FROM procurador WHERE contacto NOT IN ('Luis Fernández', 'jesus');");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
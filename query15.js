const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {

                                                //traer toda la informacion de la tabla de procurador ordenados
                                                //alfabeticamente por el contacto 
                                                //ahora con orden inverso
        let result = await pool.request().query("SELECT * FROM procurador ORDER BY contacto DESC");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
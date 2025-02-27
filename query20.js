const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {

                                                //trae todos los datos que que tengan el contacto de luis
                                                // pero solo los que en el numero de telefono empiecen con 9 o 3
                                                                                        
        let result = await pool.request().query("SELECT * FROM procurador WHERE contacto = 'Luis Fernández' AND (celular LIKE '9%' OR celular LIKE '3%');");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
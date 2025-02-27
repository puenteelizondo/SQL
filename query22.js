const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {

                                            // lo que hace es traer de la tabla procurador todos los datos que no sean 
                                            // del contacto luis fernandez
                                            //ni tampoco que en el correo sean carlo@sexample.com
                                                                                      
        let result = await pool.request().query("SELECT * FROM procurador WHERE NOT contacto='Luis Fernández' AND NOT correo='carlo@sexample.com'");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
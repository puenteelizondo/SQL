const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {

                                                //trae todos los datos que sean mayor de 6 en el id
                                                //junto con toda su informacion sino se especifican los campos
                                                                                        
        let result = await pool.request().query("SELECT * FROM procurador WHERE id_mensaje > 6");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
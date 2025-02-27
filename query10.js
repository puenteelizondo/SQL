const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {

                                                //trae todos los datos que sean mayor de 6 en el id
                                                //si especifico los campos solo trae esos
                                                                                        
        let result = await pool.request().query("SELECT contacto,correo FROM procurador WHERE id_mensaje > 6");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
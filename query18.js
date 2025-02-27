const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {

                                                //lo que hace es usar doble condicion y traer los que empiezan con la letra l en el correo
                                                // el like es para especificar que empiece con la letra especificada 
        let result = await pool.request().query("SELECT * FROM procurador WHERE contacto = 'Luis Fernández' AND correo LIKE 'l%';");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
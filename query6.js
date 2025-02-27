const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {
                                            //busca en la la tabla de procurador en la columna de contacto
                                            //juan perez y se trae todos los contactos y su informacion 
        let result = await pool.request().query("SELECT * FROM procurador WHERE contacto='Juan Pérez'");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
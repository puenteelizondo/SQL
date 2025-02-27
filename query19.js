const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {

                                            //puedo concatenar varias condiciones tambien y dependiendo de los campos que se especifiquen
        let result = await pool.request().query("SELECT contacto,correo FROM procurador WHERE contacto='Juan Pérez' AND id_mensaje<5");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
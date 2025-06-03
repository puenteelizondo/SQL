const { connectDB, sql } = require("./db");

async function getData() {
    let pool = await connectDB();
    if (pool) {

                                                //crear una tabla                  
        let result = await pool.request().query("CREATE TABLE Persons ( PersonID int,LastName varchar(255),FirstName varchar(255),Address varchar(255),City varchar(255));");
        console.log(result.recordset); // Muestra los resultados
    }
}

getData();
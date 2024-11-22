import mysql from 'mysql2';


const conn = mysql.createPool({
    connectionLimit: 10, 
    host: process.env.MYSQL_HOST,    
    user: process.env.MYSQL_USER,    
    password: process.env.MYSQL_PASSWORD,  
    database: process.env.MYSQL_DATABASE   
});


conn.query("SELECT 1 + 1 AS SOLUTION", (error, result) => {
    if (error) {
        console.error("Erro na conexão com o banco de dados:", error);
        return;
    }
    console.log("A solução é:", result[0].SOLUTION);  
});


export default conn;

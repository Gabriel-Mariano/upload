import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASS,
    database:process.env.DATABASE
});

connection.connect((err)=>{
    if(err){
        console.log(err.code);
        return connection.end();
    }

    console.log('You are connected to the server ... ');
});

export default connection;
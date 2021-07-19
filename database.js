const mysql =require('mysql');

const connection =mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'nodejs_login'
 });

 connection.connect((err)=>
 {
    if(err) throw err;
    console.log("Connected to a database ");
 });
 
 module.exports =connection;
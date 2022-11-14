"use strict";
var mysql = require('mysql');

// make the connection to SQL server
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "135Marinelife",
    database: "sql_store",
    port: "3333",  
    multipleStatements: true
});


con.connect(function(err) {
    if (err) throw err; 
    console.log("Connected!");
}); 


// Query
//let query1 = "SELECT first_name, last_name, state FROM customers";


//sqlQuery(query1); 

sqlQuery("INSERT INTO order_statuses (order_status_id, name) VALUES (8, 'Shipped')", "order_statuses");

// NOTE THAT THERE IS NO FROM WHEN UPDATING
sqlQuery("UPDATE order_statuses SET name = 'Updated' WHERE order_status_id = 8");
sqlQuery("SELECT * FROM order_statuses;");
sqlQuery("DELETE FROM order_statuses WHERE order_status_id > 3;");





/* Create function that handles any..? mySQL query. */
function sqlQuery(query) {
    con.query(query, function(err, result) {
        if (err) throw err;
        console.log(result);
    });
}

// question mark lets u know that variable or something will 
// be used in its place.
let insert = "INSERT INTO order_statuses (order_status_id, name) VALUES ?";

// now deal with arrays!
let manyValues = [
    [20, 'Lost in the void'],
    [30, 'Delivered with style'],
    [100, '???'],
] 

sqlQueryArray(insert, manyValues);



function sqlQueryArray(query, array) {
    con.query(query, [array], function(err, result) {
        if (err) throw err;
        console.log("Number of records affected: " + result.affectedRows);
        sqlQuery("SELECT * FROM order_statuses");
        sqlQuery("DELETE FROM order_statuses WHERE order_status_id > 3");
        sqlQuery("SELECT * FROM order_statuses");
    });
}


/* Result is an object with these fields. So that dot notation is getting 
a value corresponding to the key you specified. Not calling some method lol:

 fieldCount: 0,
  affectedRows: 14,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '\'Records:14  Duplicated: 0  Warnings: 0',
  protocol41: true,
  changedRows: 0
*/

/* even though this happens at the end of the file, 
JS doesn't execute things line by line. It keeps going even 
when lines aren't finished. Therefore, this can prematurely stop the
several SQL queries inside sqlQueryArray. 
*/
//con.end();

module.exports = con;
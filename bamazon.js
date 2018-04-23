var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require("console.table");
// Create connection information for sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "HyacinthusDionysus7219!!",
    database: "bamazon_DB"
});

var purchased = [];

console.table([
    {
        item_id: '',
        product_name: '',
        department_name: '';
        price: 0.00;
        stock_quantity: 0;
    }, {
        name: 'bar',
        age: 20
    }
]);

// prints
name  age
----  ---
    foo   10
bar   20

// Connect to mysql server database
connection.connect(function (err) {
    if (err) throw err;
    // Run start function after the connection to prompt the user.
    start();
});

//Create table to put info from mySQL
var table = new Table({

})
var mysql = require("mysql");
var inquirer = require("inquirer");
const cliTable = require("cli-table");
// Create connection information for sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "HyacinthusDionysus7219!!",
    database: "bamazon_DB"
});

var itemPurchased = [];

// Connect to mysql server database
connection.connect(function (err) {
    if (err) throw err;
    // Run start function after the connection to prompt the user.
    start();
});

//Create table to put info from mySQL
var table = new cliTable({

    head:
        ['item_id',
            'product_name',
            'department_name',
            'price',
            'stock_quantity'
        ],
    style: {
        compact: false,
        colAligns: ['center'],
    }
});

// Loop through items in mySQL database and push into new row in table.
for (var i = 0; i < result.length; i++) {
    table.push(
        [result[i].item_id, result[i].product_name, result[i].price]
    );
}
console.log(table);
console.log(table.toString());

purchase();

});

//Purchase function

var purchase = function () {
    var prodInfo = {

    }
}

















});
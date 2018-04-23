//Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const cliTable = require("cli-table");
// Create connection information for sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "HyacinthusDionysus7219!!",
    database: "bamazon_DB"
});

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
        [result[i].item_id, result[i].product_name, result[i].department_name, result[i].price, result[i].stock_quantity]
    );
}
console.log(table);
console.log(table.toString());

purchase();

//Validate customer is entering only positive integers
function validateInput(value) {
    var integer = Number.isInteger(parseFloat(value));
    var sign = Math.sign(value);

    if (integer && (sign === 1)) {
        return true;
    } else {
        return "Please enter a positive, whole, non-zero number."
    }
}

//initialPrompt asks for item/quantity for purchase.
function initialPrompt() {
    console.log('Enter initialPrompt');

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'item_id',
                message: 'Please enter the ID# of the item you wish to purchase.',
                validate: validateInput,
                filter: Number
            },
            {
                type: 'input',
                name: 'stock_quantity',
                message: 'Please enter the quantity you wish to purchase.',
                validate: validateInput,
                filter: Number
            }
        ]).then(function (input) {
            console.log("Customer selected: \n item_id = " + input.item_id + "\n, quantity =" + input.quantity);

            var item = input.item_id;
            var quantity = input.stock_quantity;
            //Query bamazon_db to confirm ID# exists in selected quantity.
            var queryStr = 'SELECT * FROM products WHERE?';

            connection.query(queryStr, { item_id: item }, function (err, data) {
                if (err) throw err;
                //If user selects invalid ID#, data array will be empty.
                console.log('ERROR: Invalid ID#.');

                displayInventory();

            } else
                {
                    var productData = data[0],
                    console.log('productData = ' + JSON.stringify(productData));
                    console.log('productData.stock_quantity= ' + productData.stock_quantity);

                    //Quantity entered is in stock
                    if(quantity < = productData.stock_quantity) {
                        console.log('Product requested is in stock. Your total is $' + (productData.price * quantity) + '. Placing order.');
                        //Update Inventory
                        connection.query(updateQueryStr, function (err, data) {
                            if (err) throw err;
                            console.log('Your order has been placed.  Thank you!');
                            //End Connection
                            connection.end();
                        })
                    } else {
                        console.log('Insufficient inventory.  Please modify quantity.');

                        displayInventory();
                    }
                }
            })
})
    }

function displayInventory() {
    console.log('Enter displayInventory');
    queryStr = 'SELECT * FROM products';
    connection.query(queryStr, function (err, data) {
        if (err) throw err;
        console.log('Existing Inventory:  ');

        var strOut = '';
        for (var i = 0; i < data.length; 1++) {
            strOut = '';
            strOut += 'Item ID:  ' + data[i].item_id + ' // ';
            strOut += 'Product Name:  ' + data[i].product_name + ' // ';
            strOut += 'Department:  ' + data[i].department_name + ' // ';
            strOut += 'Price: $' + data[i].data.price + ' // ';
            strOut += 'Available Quantity: ' + data[i].data.stock_quantity + ' // ';

            console.log(strOut);

            //Prompt quantity of item for purchase

            promtUserPurchase();
        }
    }
            //runBamazon will run logic
            function runBamazon() {
            console.log('Enter runBamazon');
            displayInventory();
        }
            runBamazon();

}






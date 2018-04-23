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
        [result[i].item_id, result[i].product_name, result[i].department_name, result[i].price, result[i].stock_quantity]
    );
}
console.log(table);
console.log(table.toString());

purchase();

//Validate Customer is Entering Only Positive Integers
function validateInput(value) {
    var integer = Number.isInteger(parseFloat(value));
    var sign = Math.sign(value);

    if (integer && (sign === 1)) {
        return true;
    } else {
        return "Please enter a positive, whole, non-zero number."
    }
}

//Purchase function
//Write function that decrements units as orders are filled.
//Need function that refills stock?
//  var x ='stock_quantity';
//  var y= answers.unitsSelected;
//  var totalCost= (answers.unitsSelected * result[i].price) 

var prodIdInfo = function () {
    inquirer.prompt(["What is the ID# of the item you wish to purchase?"]).then
    return result[i].item_id


        (answers.unitsSelected => {
    inquirer.prompt(["For " + result[i].item_id + "there are " + x + "units available. How many do you wish to purchase?"]).then(answers => {

    })

});

}
if 'stock_quantity' < unitsSelected
inquirer.prompt(["Insufficient stock! Please choose " + x + "or fewer units."]).then(answers => { })


else inquirer.prompt([[y] + "unit(s) cost(s):$ [z]. Confirm purchase? Y or N"]).then(answers => { }))


err
console.log("This is not a valid command.");
  }
//inquirer.prompt(["There are "+ x + "units available. How many do you wish to purchase?"]).then(answers => {})
//Needs function to crosscheck if number they select exceeds units available.
//  If it exceeds, 
//If answer <= to units available, calculate cost based on the number of items they selected 
//inquirer.prompt([[y] + "units cost:$ [z]. Confirm purchase? Y or N"]).then(answers =>{})
//Need to ask for payment method???
//If Y, i-- 'stock_quantity' 
//inquirer.prompt(["Thank you! Would you like to make another purchase?  Y or N"]).then(answers => {})
//Y should loop back to id# prompt, N should log "Have a nice day. Please come again! :-)"

// function which prompts the user for what action they should take
function start() {
    inquirer
        .prompt({
            name: "want-to-purchase",
            type: "rawlist",
            message: "What is the ID# of the item you wish to purchase?",
            choices: ["item_id", isNull]
        })
        .then(function (answer) {
            // based on their answer, either call the bid or the post functions
            if (answer.want - to - purchase.toUpperCase() === "item_id") {
                displayItem();
            }
            else {
                answer.want - to - purchase.toUpperCase();
            }
        });
}

// function to handle posting new items up for auction
function postAuction() {
    // prompt for info about the item being put up for auction
    inquirer
        .prompt([
            {
                name: "item",
                type: "input",
                message: "What is the item you would like to submit?"
            },
            {
                name: "category",
                type: "input",
                message: "What category would you like to place your auction in?"
            },
            {
                name: "startingBid",
                type: "input",
                message: "What would you like your starting bid to be?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(function (answer) {
            // when finished prompting, insert a new item into the db with that info
            connection.query(
                "INSERT INTO auctions SET ?",
                {
                    item_name: answer.item,
                    category: answer.category,
                    starting_bid: answer.startingBid,
                    highest_bid: answer.startingBid
                },
                function (err) {
                    if (err) throw err;
                    console.log("Your auction was created successfully!");
                    // re-prompt the user for if they want to bid or post
                    start();
                }
            );
        });
}

function bidAuction() {
    // query the database for all items being auctioned
    connection.query("SELECT * FROM auctions", function (err, results) {
        if (err) throw err;
        // once you have the items, prompt the user for which they'd like to bid on
        inquirer
            .prompt([
                {
                    name: "choice",
                    type: "rawlist",
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(results[i].item_name);
                        }
                        return choiceArray;
                    },
                    message: "What auction would you like to place a bid in?"
                },
                {
                    name: "bid",
                    type: "input",
                    message: "How much would you like to bid?"
                }
            ])
            .then(function (answer) {
                // get the information of the chosen item
                var chosenItem;
                for (var i = 0; i < results.length; i++) {
                    if (results[i].item_name === answer.choice) {
                        chosenItem = results[i];
                    }
                }

                // determine if bid was high enough
                if (chosenItem.highest_bid < parseInt(answer.bid)) {
                    // bid was high enough, so update db, let the user know, and start over
                    connection.query(
                        "UPDATE auctions SET ? WHERE ?",
                        [
                            {
                                highest_bid: answer.bid
                            },
                            {
                                id: chosenItem.id
                            }
                        ],
                        function (error) {
                            if (error) throw err;
                            console.log("Bid placed successfully!");
                            start();
                        }
                    );
                }
                else {
                    // bid wasn't high enough, so apologize and start over
                    console.log("Number of units selected exceeds our stock.  Please select fewer units.");
                    start();
                }
            });
    });
}
  

















});
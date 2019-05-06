let Mysql = require("mysql");
let Inquirer = require("inquirer");
let Colors = require("colors");
let Table = require('cli-table');
Colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});
let connection = Mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'bamazon_db'
});
function createTable(tableheaders) {
    let table = new Table({
        chars: {
            'top': '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗'
            , 'bottom': '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝'
            , 'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼'
            , 'right': '║', 'right-mid': '╢', 'middle': '│'
        }
    });
    table.push(tableheaders);
    return table;
};
function endConnection() {
    connection.end(function (err) {
        // The connection is terminated now
    });
};

// gets all the data from the database to display.
connection.query('SELECT item_id, product_name, department_name, price, stock_quantity FROM products LEFT JOIN departments ON products.department_id = departments.dept_id', function (error, results) {
    if (error) throw error;
    // connected!
    let table = createTable(['ID', 'Product', 'Department', 'Price', 'Qty']);
    //   console.log(results);
    results.forEach(i => {
        // console.log("Item",i.item_id, i.product_name, i.department_name, i.price, i.stock_quantity);
        table.push(
            [i.item_id, i.product_name, i.department_name, i.price, i.stock_quantity]
        );
    });
    // logs data do to the console
    console.log("\n" + table.toString().verbose);

    custAction();
});

function custAction() {
    Inquirer.prompt([
        {
            type: "input",
            name: "itemId",
            message: "Welcom to Bamazon!  Please Enter the ID of the item you wish to buy."
        },
        {
            type: "input",
            name: "qty",
            message: "How many units would you like to buy?"

        }
    ]).then(function (answers) {
        // Use user feedback for... whatever!!
        let selectedItem = answers.itemId;
        let requestQty = answers.qty;
        let productName = "";
        let currentQty = 0;
        let productPrice = 0;
        // console.log(selectedItem);
        // console.log(itemQty);
        connection.query('SELECT stock_quantity, price, product_name FROM products WHERE item_id=' + selectedItem, function (error, results) {
            currentQty = results[0].stock_quantity;
            productPrice = results[0].price;
            productName = results[0].product_name;
            if (error) {
                throw error;
            } else if (currentQty <= requestQty) {
                console.log('Insufficient quantity!'.error);
            } else {
                let remainingQty = currentQty -= requestQty;
                connection.query('UPDATE products SET stock_quantity= ? WHERE item_id= ?', [remainingQty, selectedItem], function (error, results) {
                    let total = requestQty * productPrice;
                    console.log("You successfully purchased".warn, productName.warn);
                    console.log("Your total for this purchase was:".info, "$".info + total.toFixed(2).info);
                });
            }

            connection.end(function (err) {
                // The connection is terminated now
            });

        });

    });
};



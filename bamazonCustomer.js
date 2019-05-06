let Mysql = require("mysql");
let Inquirer = require("inquirer");
let Colors = require("colors");
var Table = require('cli-table');

var connection = Mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'bamazon_db'
});
function createTable (tableheaders) {
let table = new Table({
    chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
           , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
           , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
           , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
  });
table.push(tableheaders);
return table;
};

connection.query('SELECT item_id, product_name, department_name, price, stock_quantity FROM products LEFT JOIN departments ON products.department_id = departments.dept_id', function (error, results, fields) {
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
    console.log(table.toString());
    
    connection.end(function (err) {
        // The connection is terminated now

    });
});

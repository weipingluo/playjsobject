'use strict';
import FlightDate from './shared/FlightDate';
import Product from './product/Product';
var prod = new Product(1, "Test Product");
var fd = new FlightDate("2018-01-01", "2018-01-31");
console.log(JSON.stringify(fd));
prod.addPrice("1.99", fd);
console.log(JSON.stringify(prod));
console.log(prod.getPrice("2018-01-15"));

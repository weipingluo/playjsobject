'use strict';
import Circle from './Circle';
import Point from './Point';
import FlightDate from './shared/FlightDate';
const center = new Point(1,1);
const aCircle = new Circle(5, center);
aCircle.draw();

var moment = require('moment');
console.log(moment().format());
const firstDate = moment('1970-01-01');
const forever = moment('9999-12-31');
console.log(firstDate.format("YYYY-MM-DD"));
const fl = new FlightDate('2018-11-01', '2018-12-31');
console.log(fl.print());
const fl2 = new FlightDate();
console.log(fl2.print());
console.log(fl2.toJSON());
console.log(FlightDate.isOverlapped(fl, fl2));

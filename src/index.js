'use strict';
import Circle from './Circle';
import Point from './Point';
const center = new Point(1,1);
const aCircle = new Circle(5, center);
var moment = require('moment');
console.log(moment().format());
aCircle.draw();
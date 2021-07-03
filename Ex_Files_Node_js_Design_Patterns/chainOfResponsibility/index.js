/**
 * Chain of responsibility
 *
 * Intent: "Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request.
 * Chain the receiving objects and pass the request along the chain."
 */

var Store = require('./Store');
var inventory = require('./inventory');

var skiShop = new Store('Steep and Deep', inventory);

var searchItem = 'powder skis';
var results = skiShop.find(searchItem);

console.log(results);

var PersonBuilder = require('./PersonBuilder');

/**
 * Builder Pattern
 *
 * "separate the construction of a complex object from its representation
 *  so than the same contruction process can create different representations."
 */

// Employees
var sue = new PersonBuilder('Sue').makeEmployee().makeManager(60).build();
var bill = new PersonBuilder('Bill').makeEmployee().makePartTime().build();
var phil = new PersonBuilder('Phil').makeEmployee().build();

// Shoppers
var charles = new PersonBuilder('Charles').withMoney(500).withList(['jeans', 'sunglasses']).build();

var tabbitha = new PersonBuilder('Tabbitha').withMoney(1000).build();

console.log(sue.toString());
console.log(charles.toString());

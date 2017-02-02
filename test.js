// Import your classes here to instantiate them and test them out
const Tenant = require('./lib/tenant');
const Apartment = require('./lib/apartment');
const Building = require('./lib/building');

// let p1 = new Tenant('Calvin', 'Clifford', 'male', 'Decemeber 21st, 1929');
// p1.nickname = 'Bud';
// p1.occupation = "Office Drone"
// // p1.name = "David Blaine"
// console.log(p1.fullname); //Calvin 'Bud' Clifford

// let a1 = new Apartment("B", 2, 1);
// a1.tenants = ['David', 'Bxlaine', 'Calvin'] // [];
// a1.tenants.length // 0;

// let a2 = new Apartment("A", 2, 1);
// a2.isStudio();
// console.log(a2.isStudio())
// console.log(a2, a2.price ) // "$2500"

// let a1 = new Apartment("B", 2, 1)
// let p1 = new Tenant("Fran", "Kubelik", "female", "May 8, 1935")

// a1.moveIn(p1)
// a1.tenants // [ Tenant ] // an array of tenant instances
// console.log(typeof a1.tenants)    // Object
// console.log(a1.tenants[0].constructor) // [Function: Tenant]
// console.log(a1.tenants.length)   // 1
// console.log(a1.isEmpty()); // empty: false
// console.log(a1.isFull()); // full: false
// console.log(a1)

// let a2 = new Apartment("B", 2, 1);
// let p1 = new Tenant("Al", "Kirkeby", "male", "January 23, 1949");
// let p2 = new Tenant("Karl", "Matuschka", "male", "June 27, 1949");
// console.log(a2.isEmpty()); // true
// console.log(a2.isFull());  // false
// a2.moveIn(p1);
// console.log(a2.isEmpty()); // false
// console.log(a2.isFull());  // false
// a2.moveIn(p2);
// console.log(a2.isFull());  // true

// let p1 = new Tenant("Mildred", "Dreyfuss", "female", "July 18, 1942")
// let p2 = new Tenant("Jeff", "Sheldrake", "male", "November 18, 1941")
// let p3 = new Tenant("Joe", "Dobisch", "male", "May 17, 1939")
// let a3 = new Apartment("F", 2, 1)


// a3.moveIn(p1)
// a3.moveIn(p2)

// a3.isFull() // true
// console.log(a3.moveIn(p3) ) // Uncaught Error: "Full! Joe Dobisch can't move in"
// console.log(a3.tenants.length) // 2
// console.log(a3)


let a1 = new Apartment("B", 2, 1)
let a2 = new Apartment("A", 1, 1)
let a3 = new Apartment("A", 1, 1)

let b1 = new Building("208 Leonard St", 3);

b1.add(1, a1)
b1.add(1, a2)
b1.add(2, a3)
// console.log(b1.collectRents)
b1.collectRents
console.log('apt', b1)


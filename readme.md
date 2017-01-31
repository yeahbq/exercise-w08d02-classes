# The Apartment Complex

[![Shirley you're joking.](assets/shirley_maclaine.gif)](http://en.wikipedia.org/wiki/The_Apartment)

### Instructions

For the following assignment you'll be given descriptions of objects
and some example code that clarifies how that object works. It's up to
you to write the requisite classes, instantiate and test the given 
objects according to the examples!

### Setup

1.  Put work in the appropriately named file:
    - When prompted to define a class, write the class definition inside
      of a file with the same name as the class. (**Example:** A `Unicorn` 
      class would be in a file named `unicorn.js`)
    - Be sure to export your classes

## Part 1

**filename `tenant.js`**

Create a **tenant** class to store tenant data and behavior. 
A tenant should have the following attributes:

> Set at initialization:

- f_name
- l_name
- born_on
- gender

> Set after instantiation with setter and getter methods:

- nickname
- occupation

Example Usage:

```js
let p1 = new Tenant("Calvin", "Clifford", "male", "December 21st, 1929");
p1.nickname = "Bud";
p1.occupation = "Office Drone";
```

## Part 2

A **tenant** should have a `full_name` method that returns a string of 
their first name, last name and nickname (if they have one).

Example Usage:

```js
let p1 = new Tenant("Calvin", "Clifford", "male", "December 21, 1929");
p1.nickname = "Bud";
p1.full_name // "Calvin 'Bud' Clifford";
```

## Part 3

**filename `apartment.js`**

An **apartment** should have the following attributes:

> Set at initialization:

- unit
- num_beds
- num_baths
- tenants (the collection of people renting the apartment)

Example Usage:

```js
let a1 = new Apartment("B", 2, 1);
a1.tenants // [];
a1.tenants.length // 0;
```
## Part 4

An **apartment's** price should be dynamically calculated based on the 
number of beds ($1000 per bed) and the number of bathrooms ($500 per 
bathroom).

Example Usage:

```js
let a2 = new Apartment("A", 2, 1);
a2.price // "$2500"
```

## Part 5

An **apartment** should have a predicate method to determine if it's a 
studio (has only one bedroom).

Example Usage:

```js
let a1 = new Apartment("B", 2, 1);
let a2 = new Apartment("A", 1, 1);
a1.isStudio() // false
a2.isStudio() // true
```

## Part 6

An **apartment** should have *several* methods related to its tenants.

`moveIn` should take a tenant object as input and add it to the list of
tenants.

Example Usage:

```js
let a1 = new Apartment("B", 1, 1)
let p1 = new Tenant("Fran", "Kubelik", "female", "May 8, 1935")
a1.moveIn(p1)
a1.tenants // [ Tenant ] // an array of tenant instances
typeof a1.tenants    // Array
a1.tenants[0].constructor // Tenant
a1.tenants.length   // 1
```

## Part 7

`isEmpty` should return `true` if an apartment doesn't have any tenants 
and `false` if it has tenants.

Example Usage:

```js
let a1 = new Apartment("B", 1, 1);
a1.isEmpty() // true
let p1 = new Tenant("Fran", "Kubelik", "female", "May 8, 1935")
a1.moveIn(p1)
a1.isEmpty() // false
```

`isFull` should return true if the number of tenants in an apartment is 
equal to the number of bedrooms.

Example Usage:

```js
let a2 = new Apartment("B", 2, 1);
let p1 = new Tenant("Al", "Kirkeby", "male", "January 23, 1949");
let p2 = new Tenant("Karl", "Matuschka", "male", "June 27, 1949");
a2.isEmpty(); // true
a2.isFull();  // false
a2.moveIn(p1);
a2.isEmpty(); // false
a2.isFull();  // false
a2.moveIn(p2);
a2.isFull();  // true
```

## Part 8

If you try to add more tenants than an apartment's bedrooms you'll 
throw an new error with the message `"Full! <TENANT NAME> can't move in!"`

Example Usage:

```js
let p1 = new Tenant("Mildred", "Dreyfuss", "female", "July 18, 1942")
let p2 = new Tenant("Jeff", "Sheldrake", "male", "November 18, 1941")
let p3 = new Tenant("Joe", "Dobisch", "male", "May 17, 1939")
let a3 = new Apartment("F", 2, 1)
a3.moveIn(p1)
a3.moveIn(p2)
a3.isFull() // true
a3.moveIn(p3)  // Uncaught Error: "Full! Joe Dobisch can't move in"
a3.tenants.size // 2
```

## Part 9

**filename `building.js`**

A **building** should have the following attributes:

> At initialize:

- address
- number of floors

> With getters and setters:

- apartments

Example Usage:

```js
let b1 = new Building("208 Leonard St", 3);
b1.apartments // {}
```

Define an instance method called `add` that takes the floor number and 
an apartment object as inputs and adds that apartment to the specified 
floor.

Example Usage:

```js
let a1 = new Apartment("B", 2, 1)
let a2 = new Apartment("A", 1, 1)
let a3 = new Apartment("A", 1, 1)

// Specifiy the floor and apartment object
b1.add(1, a1)
b1.add(1, a2)
b1.add(2, a3)
```

Define an instance method called `floor` that takes a floor number as 
an input and returns an array of the apartments on that floor.

Example Usage:

```
b1.floor(1) // [Apartment, Apartment]
b1.floor(2) // [Apartment]
```

Define an instance method called `collectRents` that returns the 
combined prices of its apartments.

Example Usage:

```js
b1.collectRents() // 5500
```

Define a predicate method called `hasVacancies`
that returns true if any of the apartments aren't full.

```js
let b1 = new Building("208 Leonard St", 3)
let a1 = new Apartment("B", 2, 1)
b1.add(1, a1)
let p1 = new Tenant("Al", "Kirkeby", "male", "January 23, 1949")
a1.moveIn(p1)
b1.hasVacancies() // true
```

## Bonus

Set the tenant's bornOn to a Date object

Example Usage:

```js
let p1 = new Tenant("Mildred", "Dreyfuss", "female", "July 18, 1942")
p1.born_on.constructor // Date
```

Implement an `age` method that returns their age in years.

Example Usage:

```js
let p2 = new Tenant("Jeff", "Sheldrake", "male", "November 18, 1941")
p2.age() // 76
```

// const Apartment = require('./apartment')

class Building {
  constructor (address, numOfFloors) {
    this.address = address;
    this.numOfFloors = numOfFloors;
    this.apartment = {};
    }
  add (floorNum, obj) {
    if (floorNum > this.numOfFloors) return "Floor doesn't exist";
    if (this.apartment[floorNum] === undefined) {
      this.apartment[floorNum] = [];
      this.apartment[floorNum].push(obj);
      return(this.apartment[floorNum])
    } else this.apartment[floorNum].push(obj);
  }
  floor(floorNum) {
    console.log(this.apartment[floorNum])
  }

  collectRents () {
    let rent = 0;
    for (var apt in this.apartment) {
      for (var i = 0; i < this.apartment[apt].length; i++) {
        rent += this.apartment[apt][i].price
        console.log(rent)
      }
    }
  return rent
}

}


module.exports = Building;


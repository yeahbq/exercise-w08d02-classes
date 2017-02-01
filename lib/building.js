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
      console.log(this.apartment, floorNum, this.apartment[floorNum])
    } else this.apartments[floorNum].push(Obj);
  }
  floor(floorNum) {
    return this.apartment[floorNum]
  }

  }

  // set Apartment(apartment) { // all caps, not a function and requires assignemnt
  //  return this.apartment = apartment;
  //  }


  // floor(floorNum) {
  //   this.floorNum = floorNum;
  //   this.floorApt = [];
  //   return = 'Floor:', floorNum, "Apartments:"
  // }
// }

module.exports = Building;


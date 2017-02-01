// const Building = require('./building')

class Apartment {
  constructor(unit, num_beds, num_baths){
    this.unit = unit;
    this.num_beds = num_beds;
    this.num_baths = num_baths;
    this.tenants = [];
    // this.price = num_beds * 1000 + num_baths * 500;
    // this.moveIn = tenants
  }

  get price() {
    return 'price: $' + (this.num_beds * 1000 + this.num_baths * 500);
  }
// set isStudio(rooms) {
//   this.num_beds = rooms
//   if (rooms < 2) return this._isStudio = true;
//   else return this._isStudio = false;
// }
  isStudio() {
     if(this.num_beds > 1) {
       return 'studio: ' + false
     } else return 'studio: ' + true
   }

  moveIn(tenants) {
    console.log(this.tenants)
    if (this.tenants.length < this.num_beds) return this.tenants.push(tenants);
    else return 'FULL! ' + tenants._f_name + ' ' + tenants._l_name + ' can\'t move in!';
   }

  isEmpty() {
    if(this.tenants.length === 0) return 'empty: ' + true;
    else return 'empty: ' + false;
  }

  isFull() {
    if(this.tenants.length === this.num_beds) return 'full: ' + true;
    else return 'full: ' + false;
  }


}


module.exports = Apartment;
